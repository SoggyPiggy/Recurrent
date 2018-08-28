<style>
.grid-container {
	display: grid;
}
</style>

<template>
	<div class="grid-container" 
	:style="`
	grid-gap: ${gutter}px;
	margin: ${margin};
	grid-template-columns: repeat(auto-fit, minmax(${width}px, 1fr));
	grid-template-rows: repeat(auto-fit);
	`">
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
		gutter: {
			type: Number,
			default: 8,
		},
		margin: {
			type: String,
			default: '8px',
		},
	}
}
</script>

