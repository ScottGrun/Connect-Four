<script>
	import logoSrc from '@assets/logo.svg';
	import playerVsPlayerSrc from '@assets/player-vs-player.svg';
	import Button from '@components/Button.svelte';
</script>

<div class="container">
	<div class="card-container">
		<img src={logoSrc} alt="" class="logo" />
		<div class="button-container">
			<Button asLink href="/game" variant="player-2">
				PLAY VS PLAYER
				<img src={playerVsPlayerSrc} alt="" class="pvp-logo" />
			</Button>
			<Button asLink={true} href="/rules" variant="white">GAME RULES</Button>
		</div>
	</div>
</div>

<style>
	.container {
		background-color: var(--primary-light);
		height: 100%;
	}

	.card-container {
		display: flex;
		flex-direction: column;
		margin: 0 20px;
		padding-top: 203px;
	}

	.logo {
		width: 52px;
		margin: 0 auto;
		margin-bottom: 79px;
	}

	.button-container {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.pvp-logo {
		height: 46px;
		margin-left: auto;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.container {
			background-color: var(--primary);
			padding-top: 295px;
		}

		.card-container {
			max-width: 480px;
			padding: 70px 40px 60px 40px;
			margin: 0 auto;
			border: 3px solid var(--black);
			box-shadow: 0px 10px 0px var(--black);
			border-radius: 40px;
			background-color: var(--primary-light);
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.container {
			padding-top: 233px;
		}
	}
</style>
