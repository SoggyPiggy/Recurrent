<template>
	<a-card title="Character Level" style="margin:4px;grid-row-end:span 137;">
		<favorite-button slot="extra" component="player-level"/>
		<a-popover :title="`Level: ${playerLevel}`" :content="`XP: ${playerExperience}`">
			<div class="text-ellipsis text-center">{{chapter.player.experience.level}}</div>
		</a-popover>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';

export default {
	name: 'player-level',
	general: true,
	props: {
		chapter: {
			type: Object,
			required: true,
		},
	},
	computed: {
		playerLevel() {
			return this.chapter.player.experience.level;
		},
		playerExperience() {
			return this.chapter.player.experience.xp;
		},
	},
	components: {
		FavoriteButton,
	},
};
</script>
