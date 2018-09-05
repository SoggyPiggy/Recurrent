<template>
	<a-card title="Quest Progress" style="margin:4px;grid-row-end:span 316;">
		<favorite-button slot="extra" component="quest-progress"/>
		<a-progress
		:percent="Math.floor(chapter.quest.completion * 100)"
		:status="getStatus"
		:width="200"
		class="override"
		type="dashboard"
		/>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';

export default {
	name: 'quest-progress',
	props: {
		chapter: {
			type: Object,
			required: true,
		},
	},
	computed: {
		getStatus() {
			if (this.chapter.player.status.dead) return 'exception';
			if (this.chapter.quest.complete) return 'success';
			if (this.chapter.active) return 'active';
			return null;
		},
	},
	components: {
		FavoriteButton,
	},
};
</script>
