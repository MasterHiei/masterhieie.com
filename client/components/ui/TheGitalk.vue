<template lang="pug">
  v-card#comments
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';
import '@/assets/style/stylus/gitalk.styl';
import { generateId } from '@/utils/gitalk';

@Component
export default class TheGitalk extends Vue {
  // Props
  @Prop({ type: String, required: true }) readonly articleId!: string;

  // Hooks
  mounted() {
    // Gitalk render setup
    const gitalk = new Gitalk({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      repo: process.env.COMMENTS_PEPO,
      owner: process.env.GITHUB_OWNER,
      admin: [process.env.GITHUB_OWNER],
      id: generateId(this.articleId),
      labels: [process.env.COMMENTS_LABEL],
      perPage: Number(process.env.COMMENTS_LIMIT),
    });
    gitalk.render('comments');
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#comments
  padding 4px 50px 30px 50px
</style>
