import './reactApp.jsx';
import my from './my.js';
import '../stylesheets/main.scss';

import Vue from 'vue';
import VueApp from './VueApp.vue';

import add from './add.ts';

new Vue({
  el: '#vue-root', // Vue.js アプリケーションのマウントポイント
  render: (h) => h(VueApp), // Vue.js コンポーネントをレンダリング
});

console.log(add(3, 9));
console.log('webpack!!');
my();
