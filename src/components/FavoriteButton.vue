<template>
	<a-button
	shape="circle"
	size="small"
	:icon="isFavorite ? 'star' : 'star-o'"
	@click="toggleFavorite"
	/>
</template>

<script>
export default {
	props: {
		component: {
			type: String,
			required: true,
		},
	},
	computed: {
		isFavorite() {
			return this.$store.state.chapterviewFavorites.includes(this.component);
		},
	},
	methods: {
		toggleFavorite() {
			this.$store.commit('chapterviewFavorites', this.component);
		},
	},
};
</script>

