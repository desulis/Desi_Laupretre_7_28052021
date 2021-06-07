<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">
				<img class="logo" src="./assets/icon-above-font.png">
			</router-link>
			<div class="nav_router-link">
				<router-link to="/">Actualités</router-link> |
				<router-link v-if="!$store.state.connected" to="/signup">Inscription</router-link>
				<span v-if="$store.state.connected" @click="logout">Se déconnecter</span>
			</div>
		</div>

		<div id="main-page">
			<router-view/>
		</div>

		<footer>
			<img class="logo" src="./assets/icon-left-font-monochrome-black.png">
			<p>Copyright Groupomania 2021</p>
		</footer>
	</div>
</template>

<script>
	import router from './router'

	export default {
		name: 'App',
		methods: {
			logout: function() {
				localStorage.removeItem('token')
				this.$store.commit('disconnect')
				router.push('/login')
			}
		}
	}
</script>

<style lang="scss">
body {
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background: #fafafa;
}
#nav {
	display: flex;
	align-items: center;
	padding: 20px;
	justify-content: space-between;
	background-color: white;
	border-bottom: 1px solid #ffc3c3;
	&_router-link {
		font-weight: bold;
		color: #2c3e50;
		display: flex;
		justify-content: center;
		.router-link-exact-active {
			color: #42b983;
		}
	}
}
a {
	text-decoration: none;
	color: black;
}
.logo {
	height: 70px;
	width: 170px;
	object-fit: cover;
}

#main-page {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 220px);
	background-image: url("assets/icon-above-font.png"), center, cover, no-repeat;
}

footer {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	background-color: white;
	border-top: 1px solid #ffc3c3;
	margin-top: 20px;
	padding: 20px;
}

input[type='submit'] {
	background: rgb(255, 195, 195);
	border: none;
	border-radius: 5px;
	padding: 10px 15px;
	cursor: pointer;
	&:hover {
		transform: scale(1.02);
	}
}

</style>
