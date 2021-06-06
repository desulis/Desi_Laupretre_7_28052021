import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		connected: false
	},
	mutations: {
		connect (state) {
			state.connected = true
		},
		disconnect (state) {
			state.connected = false
		},
	}
})

export default store