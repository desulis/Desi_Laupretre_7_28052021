import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		connected: localStorage.getItem('token') !== null,
		userId: parseInt(localStorage.getItem('userId')),
	},
	mutations: {
		connect (state, userId) {
			state.connected = true
			state.userId = userId
			localStorage.setItem('userId', userId)
		},
		disconnect (state) {
			state.connected = false
		},
	}
})

export default store