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
		<card-character-information/>
		<card-character-attributes/>
	</div>
</template>

<script>
import CardCharacterCreation from '@/components/NewView/CardCharacterCreation.vue';
import CardCharacterAttributes from '@/components/NewView/CardCharacterAttributes.vue';
import CardCharacterInformation from '@/components/NewView/CardCharacterInformation.vue';

export default {
	components: {
		CardCharacterCreation,
		CardCharacterAttributes,
		CardCharacterInformation,
	},
};
</script>
