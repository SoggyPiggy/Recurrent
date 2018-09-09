<template>
	<a-card title="Character Statuses" style="margin:4px;grid-row-end:span 158;">
		<favorite-button slot="extra" component="player-statuses"/>
		<a-popover :content="`Health: ${Math.floor(healthPercent * 1000) / 10}%`">
			<a-progress :percent="healthPercent * 100" :showInfo="false" :strokeColor="healthColor"/>
		</a-popover>
		<a-popover :content="`Stamina: ${Math.floor(staminaPercent * 1000) / 10}%`">
			<a-progress :percent="staminaPercent * 100" :showInfo="false" :strokeColor="staminaColor"/>
		</a-popover>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';

const colorMix = function mixColorsBasedOnValue(value, min, max) {
	return Math.round(min + (value * (max - min)));
};

const colorValue = function colorFromValue(value) {
	let mod = Math.min(Math.max((value - .2) * 5, 0), 1);
	const red = colorMix(mod, 235, 98);
	const green = colorMix(mod, 28, 196);
	const blue = colorMix(mod, 38, 0);
	return `rgb(${red}, ${green}, ${blue})`;
};

export default {
	name: 'player-statuses',
	props: {
		chapter: {
			type: Object,
			required: true,
		},
	},
	computed: {
		healthPercent() {
			return this.chapter.player.status.health / this.chapter.player.status.maxHealth;
		},
		healthColor() {
			return colorValue(this.chapter.player.status.health / this.chapter.player.status.maxHealth);
		},
		staminaPercent() {
			return this.chapter.player.status.stamina / this.chapter.player.status.maxStamina;
		},
		staminaColor() {
			return colorValue(this.chapter.player.status.stamina / this.chapter.player.status.maxStamina);
		},
	},
	methods: {
		colorFromValue(value) {
			const red = 510 * (1 - value);
			const green = 510 * value;
			return `rgb(${red < 255 ? Math.round(red) : 255}, ${green < 255 ? Math.round(green) : 255}, 0)`
		}
	},
	components: {
		FavoriteButton,
	},
};
</script>
