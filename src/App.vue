<style>
#app {
  width: 100vw;
  height: 100vh;
}

.ant-btn {
	margin-right: 8px;
}
.ant-btn-group .ant-btn {
	margin-right: 0;
}

.ant-form.ant-form-horizontal .ant-row {
	margin-bottom: 0;
}

.scrollview {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
}
.scrollview > * {
	position: absolute;
	left: 0;
	top: 0;
	right: -17px;
	bottom: 0;
	overflow-y: scroll;
}
</style>

<template>
	<a-layout id="app">
		<sidebar-nav @select="(key) => page = key"/>
		<a-layout-content>
			<div class="scrollview">
				<component :is="pageComponent" style="padding: 16px;"/>
			</div>
		</a-layout-content>
	</a-layout>
</template>

<script>
import { Game } from 'recurrent-core';
import SidebarNav from '@/components/SidebarNav.vue';
import HomeView from '@/views/HomeView.vue';
import ChapterView from '@/views/ChapterView.vue';
import NewView from '@/views/NewView.vue';

const game = Game.instance;

export default {
	data() {
		return {
			game,
			page: 'home',
		};
	},
	components: {
		SidebarNav,
	},
	computed: {
		pageComponent() {
			switch (this.page) {
				default:
				case 'home': return HomeView;
				case 'active': return ChapterView;
				case 'past': return HomeView;
				case 'new': return NewView;
			}
		},
	},
};
</script>
