import Vue from 'vue';
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { Game, Database } from 'recurrent-core';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

const mountVue = function mountVueOntoHTML(game) {
	Vue.config.productionTip = false;

	Vue.use(AntDesignVue);

	new Vue({
		router,
		store,
		data: { game },
		render: h => h(App),
	}).$mount('#app');
};

const database = new Database();
const instance = Game.createInstance(database);
if (instance instanceof Promise) {
	instance.then(() => mountVue(Game.instance));
	instance.catch(() => mountVue(Game.instance));
} else mountVue(Game.instance);
