<script>
	export default {
		name: 'Groupomania',
		props: ['url', 'text'],
        beforeCreate() { console.log('Je ne suis pas encore  créé') },
        created() { console.log('Je suis créé !') },
        beforeMount() { console.log('Je vais bientôt être monté sur le DOM!') },
        mounted() { console.log('Je suis monté sur le DOM!') },
        beforeDestroy() { console.log('Je suis sur le point de disparaître du DOM !') },
        destroyed() { console.log('Je suis supprimé') }
	}
</script>

<template>
	<a :href="url">{{ text }}</a>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
	
</style>
