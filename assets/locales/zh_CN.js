module.exports = {
  links: {
    locale: '简体中文',
    index: '首页',
    articles: '文章',
    about: '关于',
  },
  article: {
    comments: '{number}件',
    readMore: '阅读全文',
    createdDate: '发布于 {date}',
    updatedDate: '更新于 {date}',
    views: '浏览{number}次',
  },
  auth: {
    register: '注册',
    registerLink: '这里',
    registerPromotion: '还没有帐号？点击{link}注册吧！',
    login: '登录',
    loginWithGithub: '使用Github账号登录',
    loginWithGoogle: '使用Google账号登录',
    logout: '退出',
    email: '邮箱',
    username: '用户名',
    usernameTips: '允许：英文字母、数字、空格、符号（-._）',
    password: '密码',
    passwordTips: '必须：字母和数字，允许：下划线',
  },
  errors: {
    auth: {
      invalid: '邮箱地址或者密码错误',
      existed: '糟糕，该账号已经被注册了',
    },
    failed: '糟糕，系统出现了一些问题，请稍后重试或联系管理员。',
  },
};
