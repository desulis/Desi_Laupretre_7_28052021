<template>
	<div v-if="user" class="home">
		<div class="welcome-msg">
			<h1>Hello !</h1>
		</div>
		<div class="profil">
			<h2>{{ user.name }}</h2>
			<h2>{{ user.email }}</h2>
		</div>
		<button @click="deleteProfil()" value="Supprimer">Supprimer compte</button>
	</div>
</template>

<script>
	const axios = require('axios');
	import router from '../router'

	export default {
		name: 'Profil',
		components: {

		},
		data() {
			return {
				user: null
			}
		},
		methods: {
			login:function(e) {
				e.preventDefault();
				axios.post('http://localhost:3000/api/user/login', {
					email: this.userEmail,
					password: this.passUser
				} )
				.then((res) => {
					localStorage.setItem('token', res.data.token)
					this.$store.commit('connect', res.data.userId)
					router.push('/')
				})
				.catch((error) => {
					alert(error.response);
				})
			},
			deleteProfil:function() {
				axios.delete('http://localhost:3000/api/user/', { headers: { 'Authorization': "Bearer: " + localStorage.getItem('token') }}).then(() => {
					this.$store.commit('disconnect')
					router.push('/login')
				})
				.catch((error) => {
					alert(error.response);
				})
			}

		},
		created: function () {
			if (!this.$store.state.connected) {
				router.push('/login')
			} else {
				axios.get('http://localhost:3000/api/user/profil', { headers: { 'Authorization': "Bearer: " + localStorage.getItem('token') }})
					.then((response) => {
						this.user = response.data;
					})
					.catch((error) => {
						alert(error.response.data);
					})

			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		.formulaire {
			display: flex;
			flex-direction: column;
			margin-right: 0;
			justify-content: center;
			align-items: center;
			gap: 15px;
		}
		.button-sign {
			display: flex;
			justify-content: center;
			gap: 20px;
		}
	}

</style>
