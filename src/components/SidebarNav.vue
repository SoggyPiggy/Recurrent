<style>
.ant-layout-sider-trigger {
	position: absolute;
	width: 100%;
}
</style>

<template>
	<a-layout-sider collapsible v-model="collapsed">
		<a-menu
		theme="dark"
		@select="({ key }) => this.$emit('select', key)"
		:defaultSelectedKeys="['home']">
			<a-menu-item key="home">
				<a-icon type="home"/>
				<span>Home</span>
			</a-menu-item>
			<a-menu-item key="active" :disabled="!(game.chapters.length > 0)">
				<a-icon type="user"/>
				<span>Active Character</span>
			</a-menu-item>
			<a-menu-item key="past" :disabled="(!(game.chapters.length > 1)) || true">
				<a-popover content="Coming soon..." placement="right">
					<a-icon type="team"/>
					<span>Past Characters</span>
				</a-popover>
			</a-menu-item>
			<a-menu-item key="new">
				<a-icon type="user-add"/>
				<span>New Character</span>
			</a-menu-item>
		</a-menu>
	</a-layout-sider>
</template>

<script>
import { Game } from 'recurrent-core';

export default {
	data() {
		return {
			game: this.$root.game,
		};
	},
	computed: {
		collapsed: {
			get() {
				return this.$store.state.sidebarnavCollapsed;
			},
			set(value) {
				this.$store.commit('sidebarnavCollapsed', value);
			},
		},
	},
};
</script>

