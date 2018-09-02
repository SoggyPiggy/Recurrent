<style>
.newview {
	display: flex;
	flex-direction: column;
}

.newview > * {
	margin-top: 16px;
}
.newview > *:first-child {
	margin-top: 0;
}
</style>

<template>
	<div class="newview">
		<card-character-creation/>
	</div>
</template>

<script>
import CardCharacterCreation from '@/components/NewView/CardCharacterCreation.vue';

export default {
	components: {
		CardCharacterCreation,
	},
};
</script>
