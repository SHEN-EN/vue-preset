import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import VueCookies from 'vue-cookies'
import './font/iconfont.css' //全局引入icon font
import './font/iconfont.js'
import './util/scss/reset.scss';
import './util/scss/ele-reset.scss';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import TosUI from '@tosvue/tos-components';
import {
	optionalChaining,
	MakeText,
	install
} from './util/util';
install()
Vue.use(ElementUI);
Vue.use(TosUI);
Vue.use(VueCookies);
Vue.prototype.$optionalChaining = optionalChaining; // 注册可选链
Vue.prototype.MakeText = MakeText; // 注册多语言翻译
Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
