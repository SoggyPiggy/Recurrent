<template>
	<a-card title="Character Attributes">
		<a-tooltip slot="extra" placement="right">
			<span slot="title">
				<span v-if="canReroll !== true">
					<a-icon type="warning"/>
					<span> {{canReroll}}</span>
				</span>
				<span v-else>Reroll</span>
			</span>
			<a-button :disabled="canReroll !== true" shape="circle" @click="game.player.roll()">
				<a-icon type="sync"/>
			</a-button>
		</a-tooltip>
		<a-table
		:columns="columns"
		:dataSource="attributes"
		:pagination="false"
		size="small"
		/>
	</a-card>
</template>

<script>
import { Game } from 'recurrent-core';

const game = Game.instance;

export default {
	data() {
		return {
			game,
			columns: [
				{ title: 'Abbr.', dataIndex: 'abbreviation', width: '70px', sorter: true },
				{ title: 'Level', dataIndex: 'value', width: '70px', sorter: true },
				{ title: 'Atrribute', dataIndex: 'name', width: '100px', sorter: true },
				{ title: 'Description', dataIndex: 'description', width: '300px', sorter: true },
			],
		};
	},
	computed: {
		canReroll: () => {
			switch (game.status) {
				default: return true;
				case 'no-chapter': return 'You need to create a character first.';
				case 'active-chapter':
				case 'idle-chapter': return 'You can only reroll a new character.';
			}
		},
		attributes() {
			if (!game.chapter) return [];
			const { player } = game;
			const { attributes } = player;
			return [
				{
					name: 'Awareness',
					abbreviation: 'AWR',
					value: attributes.core.awareness,
					description: 'Konwing the surrounding area.',
				},
				{
					name: 'Charm',
					abbreviation: 'CHA',
					value: attributes.core.charm,
					description: 'Konwing what just to say.',
				},
				{
					name: 'Constitution',
					abbreviation: 'CON',
					value: attributes.core.constitution,
					description: 'Being about to eat damage.',
				},
				{
					name: 'Denermination',
					abbreviation: 'DET',
					value: attributes.core.determination,
					description: 'Having the will to continue on for longer.',
				},
				{
					name: 'Fortuity',
					abbreviation: 'FOR',
					value: attributes.core.fortuity,
					description: 'Having the best chances in a situation.',
				},
				{
					name: 'Ingenuity',
					abbreviation: 'ING',
					value: attributes.core.ingenuity,
					description: 'Knowing how to make something out of nothing.',
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
