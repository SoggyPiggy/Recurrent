<template>
	<a-button-group>
		<a-button :size="size" @click="computedChapter.activate()" :disabled="!canPlay">
			<a-icon type="caret-right"/>
		</a-button>
		<a-button :size="size" @click="computedChapter.deactivate()" :disabled="!canPause">
			<a-icon type="pause"/>
		</a-button>
	</a-button-group>
</template>

<script>
import { Game } from 'recurrent-core';

const game = Game.instance;

export default {
	props: {
		size: {
			type: String,
			default: 'default',
		},
		chapter: {
			default: false,
		},
	},
	data() {
		return {
			game,
		};
	},
	computed: {
		computedChapter() {
			if (this.chapter === false) return game.chapter;
			return this.chapter;
		},
		canPlay() {
			if (!this.computedChapter) return false;
			if (this.computedChapter !== game.chapter) return false;
			if (this.computedChapter.active) return false;
			if (this.computedChapter.player.status.dead) return false;
			return true;
		},
		canPause() {
			if (!this.computedChapter) return false;
			if (this.computedChapter !== game.chapter) return false;
			if (!this.computedChapter.active) return false;
			return true;
		},
	},
};
</script>
