<style>
html, body {
  all: unset;
}

#app {
  width: 100vw;
  height: 100vh;
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
