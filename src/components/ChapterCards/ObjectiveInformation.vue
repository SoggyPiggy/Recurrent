<template>
	<a-card title="Objective Information" style="margin:4px;grid-row-end:span 172;">
		<favorite-button slot="extra" component="objective-information"/>
		<a-popover :title="chapter.objective.title" :content="chapter.objective.description">
			<p>{{chapter.objective.title}}</p>
		</a-popover>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';

export default {
	name: 'objective-information',
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
