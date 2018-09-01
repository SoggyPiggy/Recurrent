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
    <sidebar-nav/>
  </a-layout>
</template>

<script>
import SidebarNav from '@/components/SidebarNav.vue';

export default {
	components: {
		SidebarNav,
	},
};
</script>
