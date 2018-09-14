<template>
	<a-tabs defaultActiveKey="home">
		<a-tab-pane tab="Landing" key="home">
			<h1>
				<a-icon type="left-square"/>
				Get started by heading to New Character from the Menu
			</h1>
			<p>Version: {{version}}</p>
		</a-tab-pane>
		<a-tab-pane tab="Change Log" key="changes">
			<change-log/>
		</a-tab-pane>
		<a-tab-pane tab="Settings" key="settings" disabled>
		</a-tab-pane>
		<a-tab-pane tab="Feedback" key="feedback">
			<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9O4mf1oBdLPHnNz6-ykB-oaH_iQO-YIm2B0ecuaCLnwmNXA/viewform?embedded=true" width="100%" height="844" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
		</a-tab-pane>
	</a-tabs>
</template>

<script>
import { version } from '@/../package.json';
import ChangeLog from '@/components/ChangeLog.vue';

export default {
	data() {
		return {
			version,
		};
	},
	components: {
		ChangeLog,
	},
};
</script>
