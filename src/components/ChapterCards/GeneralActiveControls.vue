<style>
.card-active-controls {
	width: 100%;
	display: flex;
}
.card-active-controls > * {
	width: 100%;
}
</style>

<template>
	<a-card title="Activity Controls" style="margin:4px;grid-row-end:span 156;">
		<favorite-button slot="extra" component="general-active-controls"/>
		<chapter-active-controls class="card-active-controls" size="large" :chapter="chapter"/>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';
import ChapterActiveControls from '@/components/ChapterActiveControls.vue';

export default {
	name: 'general-active-controls',
	props: {
		chapter: {
			type: Object,
			required: true,
		},
	},
	components: {
		FavoriteButton,
		ChapterActiveControls,
	},
};
</script>
