<template>
	<a-button-group>
		<a-button @click="game.chapter.activate()" :disabled="!canPlay">
			<a-icon type="caret-right"/>
		</a-button>
		<a-button @click="game.chapter.deactivate()" :disabled="!canPause">
			<a-icon type="pause"/>
		</a-button>
	</a-button-group>
</template>

<script>
import { Game } from 'recurrent-core';

const game = Game.instance;

export default {
	data() {
		return {
			game,
		};
	},
	computed: {
		canPlay() {
			if (!game.chapter) return false;
			if (game.chapter.active) return false;
			if (game.player.status.dead) return false;
			return true;
		},
		canPause() {
			if (!game.chapter) return false;
			if (!game.chapter.active) return false;
			return true;
		},
	},
};
</script>
