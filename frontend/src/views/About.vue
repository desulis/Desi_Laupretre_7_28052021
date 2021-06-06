<template>
	<div class="about">
		<h1>Nouveaux Posts</h1>
		<div v-for="post in posts" :key="post.id">
			{{ post.article }}
			{{ new Date(post.createdAt).toLocaleDateString('fr') }}
			{{ new Date(post.createdAt).toLocaleTimeString('fr') }}
		</div>
		<form @submit="sendPost">
			<div>
				<label>Post : </label>
				<input v-model="postContent">
			</div>
			<div class="button-sign-up">
				<input type="submit" value="Postez !">
			</div>
		</form>
	</div>
</template>

<script>
	const axios = require('axios');

	export default {
		name: 'About',
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
					article: this.postContent
				} )
				.then(() => {
					this.getPosts()
				})
				.catch((error) => {
					console.log(error);
				})
			},
			getPosts: function () {
				console.log('bonjourrrr')
				axios.get('http://localhost:3000/api/post')
					.then((response) => {
						this.posts = response.data;
					})
					.catch((error) => {
						console.log(error);
					})
			}
		},
		created: function () {
			this.getPosts()
		}

	}
</script>
