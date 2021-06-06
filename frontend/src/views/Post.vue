<template>
	<div class="post">
		<h1>Nouveaux Posts</h1>
		<div v-for="post in posts" :key="post.id">
			{{ post.article }}
			{{ new Date(post.createdAt).toLocaleDateString('fr') }}
			{{ new Date(post.createdAt).toLocaleTimeString('fr') }}
		</div>
		<h2>Créer un post</h2>
		<form @submit="sendPost">
			<div>
				<label>Post : </label>
				<input v-model="postContent">
				<br>
				<input type="file" accept="image/png, image/jpeg">
			</div>
			<div class="button-post">
				<input type="submit" value="Postez !">
			</div>
		</form>
	</div>
</template>

<script>
	const axios = require('axios');
	import router from '../router'

	export default {
		name: 'Post',
		components: {

		},
		data () {
			return {
				posts: [],
				postContent: ""
			}

		},
		methods: {
			sendPost:function(e) {
				e.preventDefault();
				axios.post('http://localhost:3000/api/post', {
					article: this.postContent,
					
				}, { headers: { 'Authorization': "Bearer: " + localStorage.getItem('token') }})
				.then(() => {
					this.getPosts()
				})
				.catch((error) => {
					alert(error.response.data);
				})
			},
			getPosts: function () {
				axios.get('http://localhost:3000/api/post', { headers: { 'Authorization': "Bearer: " + localStorage.getItem('token') }})
					.then((response) => {
						this.posts = response.data;
					})
					.catch((error) => {
						alert(error.response.data);
					})
			}
		},
		created: function () {
			if (!this.$store.state.connected) {
				router.push('/login')
			} else {
				this.getPosts()
			}
		}

	}
</script>
