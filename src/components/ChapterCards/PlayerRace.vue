<template>
	<a-card title="Character Race" style="margin:4px;grid-row-end:span 137;">
		<favorite-button slot="extra" component="player-race"/>
		<div class="text-ellipsis">{{chapter.player.race}}</div>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';

export default {
	name: 'player-race',
	props: {
		chapter: {
			type: Object,
			required: true,
		},
	},
	computed: {
		getStatus() {
			if (this.chapter.player.status.dead) return 'exception';
			if (this.chapter.active) return 'active';
			return null;
		},
	},
	components: {
		FavoriteButton,
	},
};
</script>
