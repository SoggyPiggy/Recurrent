<template>
	<a-tabs defaultActiveKey="general">
		<a-tab-pane tab="General" key="general">
		</a-tab-pane>
		<a-tab-pane key="favorites">
			<span slot="tab">
				<a-icon type="star"/>
				Favorites
			</span>
		</a-tab-pane>
		<a-tab-pane tab="Player" key="player">
		</a-tab-pane>
		<a-tab-pane tab="Quest" key="quest">
		</a-tab-pane>
		<a-tab-pane tab="Objective" key="objective">
		</a-tab-pane>
	</a-tabs>
</template>

<script>
import { Game } from 'recurrent-core';

const game = Game.instance;

export default {
	props: {
		chapter: {
			type: Object,
			default: () => game.chapter,
		},
	},
	data() {
		return {
			game,
		};
	},
};
</script>

