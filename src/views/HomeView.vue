<template>
	<a-tabs defaultActiveKey="home">
		<a-tab-pane tab="Landing" key="home">
			<h1>Get started by heading to New Character from the Menu<br/>
			<a-icon type="left-square"/></h1>
			<p></p>
		</a-tab-pane>
		<a-tab-pane tab="Change Log" key="changes">
			<change-log/>
		</a-tab-pane>
		<a-tab-pane tab="Settings" key="settings" disabled>
		</a-tab-pane>
	</a-tabs>
</template>

<script>
import ChangeLog from '@/components/ChangeLog.vue';

export default {
	components: {
		ChangeLog,
	},
};
</script>
