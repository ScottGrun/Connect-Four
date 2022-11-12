<script>
	import Button from '@components/Button.svelte';
	import checkmarkSrc from '@assets/check.svg';
</script>

<div class="container">
	<article class="rules-card">
		<h1 class="heading-l">Rules</h1>
		<h2 class="heading-s">OBJECTIVE</h2>
		<p class="body">
			Be the first player to connect 4 of the same colored discs in a row (either vertically,
			horizontally, or diagonally).
		</p>
		<h2 class="heading-s">How to play</h2>
		<ol class="body">
			<li>Red goes first in the first game.</li>
			<li>Players must alternate turns, and only one disc can be dropped in each turn.</li>
			<li>The game ends when there is a 4-in-a-row or a stalemate.</li>
			<li>The starter of the previous game goes second on the next game.</li>
		</ol>

		<div class="btn-container">
			<Button asLink href="/" variant="player-1" class="accept-btn" rounded>
				<img src={checkmarkSrc} alt="Accept" />
			</Button>
		</div>
	</article>
</div>

<style>
	.container {
		padding-top: 97px;
	}

	.rules-card {
		margin: 0 20px;
		position: relative;
		padding: 30px 20px 61px 20px;
		background-color: var(--white);
		border-radius: 40px;
		border: 4px solid var(--black);
		box-shadow: 0px 10px 0px var(--black);
	}

	.rules-card :global(.accept-btn) {
		height: 60px;
		width: 64px;
	}

	.btn-container {
		position: absolute;
		bottom: -32px;
		left: calc(50% - 32px);
	}

	h1,
	h2 {
		text-transform: uppercase;
	}

	h1 {
		display: block;
		margin-bottom: 29px;
		text-align: center;
	}

	h2 {
		color: var(--primary-light);
		margin-bottom: 16px;
	}

	p {
		opacity: 0.66;
		margin-bottom: 33px;
	}

	ol {
		padding: 0;
		list-style: none;
		counter-reset: item;
	}

	li {
		counter-increment: item;
		margin-bottom: 5px;
		opacity: 0.66;
	}

	li:before {
		margin-right: 19px;
		content: counter(item);
		font-size: 1rem;
		font-weight: 700;
		line-height: 20px;
		letter-spacing: 0px;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.container {
			padding-top: 229px;
		}

		.rules-card {
			width: 100%;
			max-width: 537px;
			padding: 30px 34px 54px 34px;
			margin: 0 auto;
		}
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.rules-card {
			max-width: 480px;
		}

		.container {
			padding-top: 182px;
		}
	}
</style>
