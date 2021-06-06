<template>
	<div class="home">
		<form>
			<div class="formulaire">
				<div>
					<label>Nom d'Utilisateur : </label>
					<input>
				</div>
				<div>
					<label>Mot de pass : </label>
					<input>
				</div>
			</div>
			<div class="button-sign">
				<div class="button-sign-up">
					<button>Inscrire</button>
				</div>
				<div class="button-sign-in">
					<button>Connectéz</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>

	export default {
		name: 'Home',
		components: {

		}
	}
</script>

<style lang="scss">
	.home {
		display: flex;
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
