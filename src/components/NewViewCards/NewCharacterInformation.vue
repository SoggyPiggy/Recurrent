<template>
	<a-card title="Character Information">
		<template slot="extra">
			<a-tooltip
			placement="bottomRight"
			:title="canReroll"
			:trigger="canReroll !== true?'hover':'null'">
				<a-button
				:disabled="canReroll !== true"
				@click="game.player.information.randomizeRace()">
					<a-icon type="sync"/> Race
				</a-button>
				<a-button
				:disabled="canReroll !== true"
				@click="game.player.information.randomizeName()">
					<a-icon type="sync"/> Name
				</a-button>
			</a-tooltip>
		</template>
		<a-form layout="horizontal">
			<a-form-item label="Race" :labelCol="{ span: 3 }" :wrapperCol="{ span: 10 }">
				<a-input
				readOnly
				:disabled="canReroll !== true"
				placeholder="Character Race"
				v-model="race"
				/>
			</a-form-item>
			<a-form-item label="Name" :labelCol="{ span: 3 }" :wrapperCol="{ span: 10 }">
				<a-input
				:disabled="canReroll !== true"
				placeholder="Character Name"
				v-model="name"
				/>
			</a-form-item>
		</a-form>
	</a-card>
</template>

<script>
import { Game } from 'recurrent-core';

export default {
	data() {
		return {
			game: this.$root.game,
		};
	},
	computed: {
		canReroll: () => {
			switch (Game.instance.status) {
				default: return true;
				case 'no-chapter': return 'You need to create a character first.';
				case 'active-chapter':
				case 'idle-chapter': return 'You can only reroll a new character.';
			}
		},
		race() {
			if (!Game.instance.chapter) return '';
			return Game.instance.chapter.player.race;
		},
		name: {
			get() {
				if (!Game.instance.chapter) return '';
				return Game.instance.chapter.player.name;
			},
			set(value) {
				if (Game.instance.chapter && value.length <= 16) {
					Game.instance.chapter.player.name = value;
				}
			},
		},
	},
};
</script>
