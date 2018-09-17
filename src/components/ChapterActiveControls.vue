<template>
	<a-button-group>
		<a-button :size="size" @click="activate" :disabled="!canPlay">
			<a-icon type="caret-right"/>
		</a-button>
		<a-button :size="size" @click="deactivate" :disabled="!canPause">
			<a-icon type="pause"/>
		</a-button>
	</a-button-group>
</template>

<script>
import { Game } from 'recurrent-core';

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
		computedChapter() {
			if (this.chapter === false) return Game.instance.chapter;
			return this.chapter;
		},
		canPlay() {
			if (!this.computedChapter) return false;
			if (this.computedChapter !== Game.instance.chapter) return false;
			if (this.computedChapter.active) return false;
			if (this.computedChapter.player.status.dead) return false;
			return true;
		},
		canPause() {
			if (!this.computedChapter) return false;
			if (this.computedChapter !== Game.instance.chapter) return false;
			if (!this.computedChapter.active) return false;
			return true;
		},
	},
	methods: {
		activate() {
			this.computedChapter.activate();
			Game.instance.save(Game.instance.chapter);
		},
		deactivate() {
			this.computedChapter.deactivate();
			Game.instance.save();
		},
	},
};
</script>
