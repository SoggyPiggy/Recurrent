import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistedState from 'vuex-persistedstate';
import ElectronStore from 'electron-store';

const config = new ElectronStore();

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		sidebarnavCollapsed: false,
		chapterviewTabPane: 'general',
		chapterviewFavorites: [],
	},
	/* eslint-disable no-param-reassign */
	mutations: {
		sidebarnavCollapsed(state, value) {
			state.sidebarnavCollapsed = value;
		},
		chapterviewTabPane(state, value) {
			state.chapterviewTabPane = value;
		},
		chapterviewFavorites(state, value) {
			if (state.chapterviewFavorites.includes(value)) {
				state.chapterviewFavorites = state.chapterviewFavorites.filter(key => key !== value);
			} else {
				state.chapterviewFavorites.push(value);
			}
		},
	},
	/* eslint-enable no-param-reassign */
	actions: {

	},
	plugins: [
		VuexPersistedState({
			storage: {
				getItem: key => config.get(key),
				setItem: (key, value) => config.set(key, value),
				removeItem: key => config.delete(key),
			},
		}),
	],
});
