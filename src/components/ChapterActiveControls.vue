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
import { remote } from 'electron';

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
	computed: {
		game: () => remote.getGlobal('game'),
		computedChapter() {
			if (this.chapter === false) return this.game.chapter;
			return this.chapter;
		},
		canPlay() {
			if (!this.computedChapter) return false;
			if (this.computedChapter !== this.game.chapter) return false;
			if (this.computedChapter.active) return false;
			if (this.computedChapter.player.status.dead) return false;
			return true;
		},
		canPause() {
			if (!this.computedChapter) return false;
			if (this.computedChapter !== this.game.chapter) return false;
			if (!this.computedChapter.active) return false;
			return true;
		},
	},
};
</script>
