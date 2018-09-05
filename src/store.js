import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistedState from 'vuex-persistedstate';
import ElectronStore from 'electron-store';

const store = new ElectronStore({ name: 'vuex' });

Vue.use(Vuex);

export default new Vuex.Store({
	state: {

	},
	/* eslint-disable no-param-reassign */
	mutations: {

	},
	/* eslint-enable no-param-reassign */
	actions: {

	},
	plugins: [
		VuexPersistedState({
			storage: {
				getItem: key => store.get(key),
				setItem: (key, value) => store.set(key, value),
				removeItem: key => store.delete(key),
			},
		}),
	],
});
