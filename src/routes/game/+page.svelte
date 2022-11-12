<script>
	import Board from '@components/Board.svelte';
	import GameHeader from '@components/GameHeader.svelte';
	import Scorecard from '@components/Scorecard.svelte';
	import Timecard from '@components/Timecard.svelte';
</script>

<div class="container">
	<GameHeader />
	<div class="scoreboard" aria-label="Scoreboard">
		<Scorecard playerName="Player 1" />
		<Scorecard flip playerName="Player 2" />
	</div>
	<div class="board-container">
		<Board />
		<Timecard class="timer" />
	</div>
	<div class="background" />
</div>

<style>
	.container {
		margin: 0 20px;
		padding-top: 50px;
		height: 100%;
	}

	.scoreboard {
		display: flex;
		justify-content: space-between;
		padding: 50px 0px;
	}

	.board-container {
		position: relative;
	}

	:global(.timer) {
		position: absolute;
		left: calc(50% - 95px);
		margin-top: -20px;
		z-index: 2;
	}

	.background {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 200px;
		width: 100%;
		background: #5c2dd5;
		border-radius: 60px 60px 0px 0px;
		z-index: -1;
	}
</style>
