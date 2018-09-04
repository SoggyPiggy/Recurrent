<template>
	<a-card title="Character Name" style="margin:4px;grid-row-end:span 137;">
		<favorite-button slot="extra" component="player-name"/>
		<div class="text-ellipsis">{{chapter.player.name}}</div>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';

export default {
	name: 'player-name',
	general: true,
	props: {
		chapter: {
			type: Object,
			required: true,
		},
	},
	components: {
		FavoriteButton,
	},
};
</script>
