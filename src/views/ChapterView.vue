<template>
	<a-tabs :activeKey="pane" @change="key => pane = key">
		<a-tab-pane tab="General" key="general">
			<grid-container :width="258" :height="1" :gutter="0" margin="0" justify="center">
				<component v-for="item of generalComponents" :key="item" :chapter="chapter" :is="item"/>
			</grid-container>
		</a-tab-pane>
		<a-tab-pane key="favorites">
			<span slot="tab">
				<a-icon type="star"/>
				Favorites
			</span>
			<grid-container :width="258" :height="1" :gutter="0" margin="0" justify="center">
				<component v-for="item of favoriteComponents" :key="item" :chapter="chapter" :is="item"/>
			</grid-container>
		</a-tab-pane>
		<a-tab-pane tab="Character" key="player">
			<grid-container :width="258" :height="1" :gutter="0" margin="0" justify="center">
				<component v-for="item of playerComponents" :key="item" :chapter="chapter" :is="item"/>
			</grid-container>
		</a-tab-pane>
		<a-tab-pane tab="Quest" key="quest">
			<grid-container :width="258" :height="1" :gutter="0" margin="0" justify="center">
				<component v-for="item of questComponents" :key="item" :chapter="chapter" :is="item"/>
			</grid-container>
		</a-tab-pane>
		<a-tab-pane tab="Objective" key="objective">
			<grid-container :width="258" :height="1" :gutter="0" margin="0" justify="center">
				<component v-for="item of objectiveComponents" :key="item" :chapter="chapter" :is="item"/>
			</grid-container>
		</a-tab-pane>
	</a-tabs>
</template>

<script>
import { remote } from 'electron';

import GridContainer from '@/components/GridContainer.vue';

import GeneralActiveControls from '@/components/ChapterCards/GeneralActiveControls.vue';
import GeneralProgress from '@/components/ChapterCards/GeneralProgress.vue';
import ObjectiveInformation from '@/components/ChapterCards/ObjectiveInformation.vue';
import ObjectiveProgress from '@/components/ChapterCards/ObjectiveProgress.vue';
import PlayerAttributes from '@/components/ChapterCards/PlayerAttributes.vue';
import PlayerLevel from '@/components/ChapterCards/PlayerLevel.vue';
import PlayerName from '@/components/ChapterCards/PlayerName.vue';
import PlayerRace from '@/components/ChapterCards/PlayerRace.vue';
import PlayerStatuses from '@/components/ChapterCards/PlayerStatuses.vue';
import QuestProgress from '@/components/ChapterCards/QuestProgress.vue';

export default {
	props: {
		chapter: {
			type: Object,
			default: () => remote.getGlobal('game').chapter,
		},
	},
	data() {
		const generalComponents = [
			'general-active-controls',
			'general-progress',
			'objective-information',
			'player-attributes',
			'player-level',
			'player-name',
		];
		const playerComponents = [
			'player-attributes',
			'player-level',
			'player-name',
			'player-race',
			'player-statuses',
		];
		const questComponents = [
			'quest-progress',
		];
		const objectiveComponents = [
			'objective-information',
			'objective-progress',
		];
		return {
			generalComponents,
			playerComponents,
			questComponents,
			objectiveComponents,
		};
	},
	computed: {
		pane: {
			get() {
				return this.$store.state.chapterviewTabPane;
			},
			set(value) {
				this.$store.commit('chapterviewTabPane', value);
			},
		},
		favoriteComponents() {
			return this.$store.state.chapterviewFavorites;
		},
	},
	components: {
		GeneralActiveControls,
		GeneralProgress,
		GridContainer,
		ObjectiveInformation,
		ObjectiveProgress,
		PlayerAttributes,
		PlayerLevel,
		PlayerName,
		PlayerRace,
		PlayerStatuses,
		QuestProgress,
	},
};
</script>

