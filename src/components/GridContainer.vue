<style>
.grid-container {
	display: grid;
}
</style>

<template>
	<div
		class="grid-container"
		:style="`
			grid-gap: ${gutter}px;
			margin: ${margin};
			grid-template-columns: repeat(${method}, ${width}px);
			grid-auto-rows: ${height}px;
			justify-content: ${justify};
		`"
	>
		<slot/>
	</div>
</template>

<script>
export default {
	props: {
		width: {
			type: Number,
			required: true,
		},
		height: {
			type: Number,
			default: 10,
		},
		gutter: {
			type: Number,
			default: 16,
		},
		margin: {
			type: String,
			default: '8px',
		},
		method: {
			type: String,
			default: 'auto-fill',
		},
		justify: {
			type: String,
			default: 'initial',
		},
	},
};
</script>

