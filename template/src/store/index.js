import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		language: {},
		loading: false
	},
	mutations: {
		setLang(state, lang) {
			state.language = lang;
		},
		setLoading(state, val) {
			state.loading = val
		},
	},
	getters: {
		getLang: state => {
			return state.language
		},
		getLoding(state) {
			return state.loading
		}
	},
	actions: {
	},
})
