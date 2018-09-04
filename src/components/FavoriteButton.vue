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
			return false;
		},
	},
	methods: {
		toggleFavorite() {
			this.$emit('favorite');
		},
	},
};
</script>

