<template>
	<a-card title="Character Attributes" style="margin:4px;grid-row-end:span 497;">
		<favorite-button slot="extra" component="player-attributes"/>
		<a-table
		:columns="columns"
		:dataSource="attributes"
		:bordered="false"
		:pagination="false"
		size="small"
		/>
	</a-card>
</template>

<script>
import FavoriteButton from '@/components/FavoriteButton.vue';

export default {
	name: 'player-attributes',
	general: true,
	props: {
		chapter: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			columns: [
				{ title: 'Abbr.', dataIndex: 'abbreviation', width: '1' },
				{ title: 'Level', dataIndex: 'value', width: '1' },
			],
		};
	},
	computed: {
		attributes() {
			const { player } = this.chapter;
			return [
				{
					name: 'Awareness',
					abbreviation: 'AWR',
					value: player.awareness,
					description: 'Konwing the surrounding area.',
				},
				{
					name: 'Charm',
					abbreviation: 'CHA',
					value: player.charm,
					description: 'Konwing what just to say.',
				},
				{
					name: 'Constitution',
					abbreviation: 'CON',
					value: player.constitution,
					description: 'Being about to eat damage.',
				},
				{
					name: 'Denermination',
					abbreviation: 'DET',
					value: player.determination,
					description: 'Having the will to continue on for longer.',
				},
				{
					name: 'Fortuity',
					abbreviation: 'FOR',
					value: player.fortuity,
					description: 'Having the best chances in a situation.',
				},
				{
					name: 'Ingenuity',
					abbreviation: 'ING',
					value: player.ingenuity,
					description: 'Knowing how to make something out of nothing.',
				},
				{
					name: 'Insight',
					abbreviation: 'INS',
					value: player.insight,
					description: 'Being able to learn more from experiences.',
				},
				{
					name: 'Might',
					abbreviation: 'MIT',
					value: player.might,
					description: 'Being able to hit harder.',
				},
				{
					name: 'Proficiency',
					abbreviation: 'PRO',
					value: player.proficiency,
					description: 'Being able to complete tasks faster.',
				},
			];
		},
	},
	components: {
		FavoriteButton,
	},
};
</script>
