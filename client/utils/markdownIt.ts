import MarkdownIt from 'markdown-it';
import markdownItEmoji from 'markdown-it-emoji';
import markdownItAnchor from 'markdown-it-anchor';
import hljs from './hljs';

import 'github-markdown-css/github-markdown.css';

/**
 * Instance of markdown-it
 */
const md = new MarkdownIt({
  linkify: true,
  xhtmlOut: true,
  typographer: true,
  highlight: (str, lang): string => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const highlighted = hljs.highlight(lang, str, true).value;
        return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
      } catch (__) {}
    }
    const escaped = md.utils.escapeHtml(str);
    return `<pre><code class="hljs language-${lang}">${escaped}</code></pre>`;
  },
});

// Use plugins
md.use(markdownItEmoji);

md.use(markdownItAnchor, {
  permalink: true,
  permalinkClass: 'anchor',
  permalinkBefore: true,
});

export default md;
