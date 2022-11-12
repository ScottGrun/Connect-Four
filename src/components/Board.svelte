<script lang="ts">
	import BlackBoardLayer from '@assets/BlackBoardLayer.svelte';
	import WhiteBoardLayer from '@assets/WhiteBoardLayer.svelte';
	import Chip from '@components/Chip.svelte';
	import { board, currentPlayer } from '@utils/store';
	let class_name = '';
	export { class_name as class };

	function dropInColumn(xPos: number) {
		for (let i = 5; i >= 0; i--) {
			if ($board[i][xPos] === 0) {
				$board[i][xPos] = $currentPlayer;
				$currentPlayer = $currentPlayer === 1 ? 2 : 1;
				return;
			}
		}
	}

	function playTurn(row: number) {
		// TODO: implement player turn check here
		dropInColumn(row);
	}
</script>

<div class="board-container {class_name}">
	<BlackBoardLayer />
	<WhiteBoardLayer />
	<!-- TODO: Make this a table to support  navigation -->
	<div class="board">
		{#each $board as row, _}
			{#each row as playerPiece, xIndex}
				<Chip value={playerPiece} on:click={() => playTurn(xIndex)} />
			{/each}
		{/each}
	</div>
</div>

<style>
	.board {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.5625em;
		padding: 0.5625em;
		padding-bottom: 2.25em;
	}

	.board-container {
		position: relative;
	}

	/* Tablet */
	@media (min-width: 768px) {
		.board {
			gap: 20px;
			padding: 18px;
			padding-bottom: 80px;
		}
	}
</style>
