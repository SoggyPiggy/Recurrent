<template>
	<a-card title="General Progress" style="margin:4px;grid-row-end:span 200;">
		<favorite-button slot="extra" component="general-progress"/>
		<div>Quest Progress</div>
		<a-progress
		:percent="Math.floor(chapter.quest.completion * 100)"
		:status="getStatusQuest"
		/>
		<div>Objective Progress</div>
		<a-progress
		:percent="Math.floor(chapter.objective.completion * 100)"
		:status="getStatusObjective"
		/>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';

export default {
	name: 'general-progress',
	props: {
		chapter: {
			type: Object,
			required: true,
		},
	},
	computed: {
		getStatusQuest() {
			if (this.chapter.player.status.dead) return 'exception';
			if (this.chapter.quest.complete) return 'success';
			if (this.chapter.active) return 'active';
			return null;
		},
		getStatusObjective() {
			if (this.chapter.player.status.dead) return 'exception';
			if (this.chapter.objective.complete) return 'success';
			if (this.chapter.active) return 'active';
			return null;
		},
	},
	components: {
		FavoriteButton,
	},
};
</script>
