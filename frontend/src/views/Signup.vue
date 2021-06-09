<template>
	<div class="signup">
		<div class="welcome-msg">
			<h1>Bienvenue au réseau du Groupomania !</h1>
		</div>

		<form @submit="signup">
			<div class="formulaire" >
				<div>
					<label>Nom : </label>
					<input v-model="userName">
				</div>
				<div>
					<label>Email : </label>
					<input v-model="userEmail">
				</div>
				<div>
					<label>Mot de passe : </label>
					<input v-model="passNew" type="password">
				</div>
			</div>
			<div class="button-sign">
				<input type="submit" value="S'Inscrire">
			</div>
		</form>
	</div>
</template>

<script>
	const axios = require('axios');
	import router from '../router'

	export default {
		name: 'Signup',
		components: {

		},
		data() {
			return {
				userName: '',
				userEmail: '',
				passNew: ''
			}
		},
		methods: {
			signup:function(e) {
				e.preventDefault();
				axios.post('http://localhost:3000/api/user/signup', {
					name: this.userName,
					email: this.userEmail,
					password: this.passNew
				} )
				.then((res) => {
					this.$store.commit('connect', res.data)
					router.push('/')
				})
				.catch((error) => {
					alert(error.response.data);
				})
			},
		}
	}
</script>

<style lang="scss">
	.signup {
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
			justify-content: flex-start;
			align-items: center;
			align-content: flex-start;
			gap: 15px;
		}
		.button-sign {
			display: flex;
			justify-content: center;
			gap: 20px;
		}
	}

</style>
