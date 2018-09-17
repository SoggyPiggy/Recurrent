<template>
	<a-card title="Character Attributes">
		<template slot="extra">
			<a-tooltip
			placement="bottomRight"
			:title="canReroll"
			:trigger="canReroll !== true?'hover':'null'">
				<a-button :disabled="canReroll !== true" @click="game.player.roll()">
					<a-icon type="sync"/> Attributes
				</a-button>
			</a-tooltip>
		</template>
		<a-list itemLayout="horizontal" size="small" :dataSource="attributes">
			<a-list-item slot="renderItem" slot-scope="attribute">
				<a-list-item-meta :description="attribute.description">
					<a-avatar slot="avatar">{{attribute.abbreviation}}</a-avatar>
					<span slot="title">{{attribute.name}}: {{attribute.value}}</span>
				</a-list-item-meta>
			</a-list-item>
		</a-list>
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
		attributes() {
			if (!Game.instance.chapter) return [];
			const { player } = Game.instance;
			const { attributes } = player;
			return [
				{
					name: 'Awareness',
					abbreviation: 'AWR',
					value: attributes.core.awareness,
					description: 'Knowing the surrounding area.',
				},
				{
					name: 'Charm',
					abbreviation: 'CHA',
					value: attributes.core.charm,
					description: 'Knowing what just to say.',
				},
				{
					name: 'Constitution',
					abbreviation: 'CON',
					value: attributes.core.constitution,
					description: 'Being about to eat more damage.',
				},
				{
					name: 'Determination',
					abbreviation: 'DET',
					value: attributes.core.determination,
					description: 'Having the will to continue on for longer.',
				},
				{
					name: 'Fortuity',
					abbreviation: 'FOR',
					value: attributes.core.fortuity,
					description: 'Having better chances in a situation.',
				},
				{
					name: 'Ingenuity',
					abbreviation: 'ING',
					value: attributes.core.ingenuity,
					description: 'Knowing more about making something out of nothing.',
				},
				{
					name: 'Insight',
					abbreviation: 'INS',
					value: attributes.core.insight,
					description: 'Being able to learn more from experiences.',
				},
				{
					name: 'Might',
					abbreviation: 'MIT',
					value: attributes.core.might,
					description: 'Being able to hit harder.',
				},
				{
					name: 'Proficiency',
					abbreviation: 'PRO',
					value: attributes.core.proficiency,
					description: 'Being able to complete tasks faster.',
				},
			];
		},
	},
};
</script>
