<template>
	<a-tabs defaultActiveKey="home">
		<a-tab-pane tab="Home" key="home">
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
