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
		<new-character-creation/>
		<new-character-information/>
		<new-character-attributes/>
	</div>
</template>

<script>
import NewCharacterCreation from '@/components/NewViewCards/NewCharacterCreation.vue';
import NewCharacterAttributes from '@/components/NewViewCards/NewCharacterAttributes.vue';
import NewCharacterInformation from '@/components/NewViewCards/NewCharacterInformation.vue';

export default {
	components: {
		NewCharacterCreation,
		NewCharacterAttributes,
		NewCharacterInformation,
	},
};
</script>
