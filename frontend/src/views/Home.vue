<template>
	<div class="home">
		<div class="welcome-msg">
			<h1>Bonjour !</h1>
		</div>

		<form @submit="login">
			<div class="formulaire">
				<div>
					<label>Nom d'utilisateur : </label>
					<input v-model="userEmail">
				</div>
				<div>
					<label>Mot de passe : </label>
					<input v-model="passUser" type="password">
				</div>
			</div>
			<div class="button-sign">
				<input type="submit" value="Connexion">
			</div>
		</form>
	</div>
</template>

<script>
	const axios = require('axios');
	import router from '../router'

	export default {
		name: 'Home',
		components: {

		},
		data() {
			return {
				userEmail: '',
				passUser: ''
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
					this.$store.commit('connect', res.data)
					router.push('/')
				})
				.catch((error) => {
					alert(error.response);
				})
			},
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
