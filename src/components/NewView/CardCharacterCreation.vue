<style>
.creation-card > * {
	display: flex;
}
.creation-card > * > *:last-child {
	margin-left: auto;
}
</style>

<template>
	<a-card class="creation-card">
		<a-tooltip
		:title="canNew"
		placement="bottom"
		:trigger="canNew !== true?'hover':'null'">
			<a-button
			type="primary"
			:disabled="canNew !== true"
			@click="game.newChapter()">
				New Character
			</a-button>
		</a-tooltip>
		<chapter-active-controls/>
	</a-card>
</template>

<script>
import { Game } from 'recurrent-core';
import ChapterActiveControls from '@/components/ChapterActiveControls.vue';

const game = Game.instance;

export default {
	data() {
		return {
			game,
		};
	},
	components: {
		ChapterActiveControls,
	},
	computed: {
		canNew() {
			if (!game.chapter) return true;
			if (game.chapter.active) return 'Pause your current character before making a new.';
			if (game.chapter.ticks <= 0) return 'You already have a new character.';
			return true;
		},
		canReroll() {
			if (!game.chapter) return 'You have to create a character first.';
			if (game.chapter.ticks > 0) return 'You can only reroll a new character.';
			return true;
		},
	},
};
</script>
