import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		languages: {},
		loading: false
	},
	mutations: {
		setDockerLang(state, lang) {
			state.languages = lang;
		},
		setLoading(state, val) {
			state.loading = val
		},
	},
	getters: {
		getLang: state => {
			return state.languages
		},
		getLoding(state) {
			return state.loading
		}
	},
	actions: {
	},
})
