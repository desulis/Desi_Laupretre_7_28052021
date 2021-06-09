import Vue from 'vue'
import Vuex from 'vuex' //

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		connected: localStorage.getItem('token') !== null,
		userId: parseInt(localStorage.getItem('userId')),
		admin: !!localStorage.getItem('admin')
	},
	mutations: {
		connect (state, data) {
			state.connected = true
			state.userId = data.userId
			state.admin = data.admin
			localStorage.setItem('token', data.token)
			localStorage.setItem('userId', data.userId)
			localStorage.setItem('admin', data.admin)
		},
		disconnect (state) {
			state.connected = false
		},
	}
})

export default store