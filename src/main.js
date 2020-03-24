import Vue from 'vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import App from './App.vue';
import _ from 'lodash';
Vue.prototype._ = _;
window._ = require('lodash');

Vue.config.productionTip = false;
Vue.use(VueLodash, { name: 'custom', lodash: lodash });

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount('#app');
