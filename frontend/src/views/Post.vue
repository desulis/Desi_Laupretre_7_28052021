<template>
	<div>
		<h2>Quoi de neuf ?</h2>
		<form @submit="sendPost">
			<label>Créer un nouveau post</label>
			<textarea v-model="postContent" />
			<input ref="fileInput" type="file" accept="image/png, image/jpeg"> 
			<div class="button-post">
				<input type="submit" value="Postez !">
			</div>
		</form>
		<h2>Nouveaux Posts</h2>
		<div class="posts">
			<div v-for="post in posts" :key="post.id" class="post">
				<div class="content">
					Par <b>{{ post.user.name }}</b> -
					{{ new Date(post.createdAt).toLocaleDateString('fr') }}
					{{ new Date(post.createdAt).toLocaleTimeString('fr') }}
					<button @click="deletePost(post)" value="Supprimer">Supprimer</button>
					<div class="article" v-html="post.article" v-linkified >{{ post.article }}</div>
				</div>
				<img v-if="post.image" :src="post.image">
				<div class="comment-post">
					<h4>Commentaires</h4>
					<div class="comments">
						<div v-for="comment in post.comments" :key="comment.id" class="comment">
							<div class="content">
								Par {{ comment.user.name }} ---
								{{ comment.comment }}
								{{ new Date(comment.createdAt).toLocaleDateString('fr') }}
								{{ new Date(comment.createdAt).toLocaleTimeString('fr') }}
							</div>
						</div>
					</div>
					<form @submit="sendComment($event, post)">
						<label>Ajouter un commentaire</label>
						<textarea v-model="post.commentContent" />
						<div class="button-post">
							<input type="submit" value="Commentez !">
						</div>
					</form>
					
				</div>
			</div>
		</div>
		
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
				e.preventDefault()
				var data = new FormData()
				data.append('image', this.$refs.fileInput.files[0])
				data.append('article', this.postContent)
				data.append('userId', this.$store.state.userId)
				axios.post('http://localhost:3000/api/post', data, { headers: { 'Authorization': "Bearer: " + localStorage.getItem('token') }})
				.then(() => {
					this.getPosts()
				})
				.catch((error) => {
					alert(error.response.data);
				})
			},
			sendComment: function(e, post) {
				e.preventDefault()
				axios.post('http://localhost:3000/api/comment', {
					userId: this.$store.state.userId,
					postId: post.id,
					comment: post.commentContent
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

			},
			deletePost: function (post) {
				axios.delete('http://localhost:3000/api/post/' + post.id, { headers: { 'Authorization': "Bearer: " + localStorage.getItem('token') }})
				.then(() => {
					this.getPosts()
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

<style lang="scss">

form {
	display: flex;
	flex-direction: column;
	
}
textarea {
	min-height: 100px;
	margin: 5px 0;
}
.button-post {
	align-self: center;
}

.posts {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.post {
	padding: 15px;
	border: 1px solid #aaa;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	background: white;

	img {
		flex: 1;
		max-height: 290px;
		background: pink;
		object-fit: contain;
	}
	.article {
		white-space: pre-wrap;
		font-size: 30px;
		padding: 10px 0;
		a {
			text-decoration: underline pink;
		}
	}
}
input[type='file'] {
	background: white;
	border: 1px solid #777;
	margin-bottom: 10px;
	padding: 5px;
}
</style>