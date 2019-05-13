import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad, {
  attempt: 1,
  loading: `/loading/eclipse.svg`,
});
