
import Vue from "vue";
import store from "@/store/index";

const throttle = (fn, delay) => {
	// fn节流函数 delay 秒数 ms
	var timeout = null;
	if (timeout) clearTimeout(timeout);
	timeout = setTimeout(() => {
		fn();
	}, delay || 500);
};
const debounce = (fn, delay) => {
	// fn防抖函数 delay 秒数 ms
	let timer = null;
	return function () {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(fn, delay || 500);
	};
};
// 查找同级目录下以vue结尾的组件
const requireComponent = require.context("@/components", false, /\.vue$/);
const install = () => {
	//自动注册组件
	requireComponent.keys().forEach((fileName) => {
		let config = requireComponent(fileName);
		let componentName = fileName.replace(/^\.\//, "").replace(/\.\w+$/, "");
		Vue.component(componentName, config.default || config);
	});
};

/**
 * 解决Vue Template模板中无法使用可选链的问题
 */
const optionalChaining = (obj, ...rest) => {
	let tmp = obj;
	for (let key in rest) {
		let name = rest[key];
		tmp = tmp?.[name];
	}
	return tmp || "";
};


const MakeText =  (val) => {
	if(val instanceof Array){
		let key = val[0];
		let value = val[1];
		let lang = store.getters.getLang[key][value];
		return  !lang ? val : lang
	} 
	return val;
};
export {
	throttle,
	install,
	optionalChaining,
	debounce,
	MakeText,
};
