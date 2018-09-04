<template>
	<a-card :title="selectedLog.title">
		<a-select style="width: 200px;" slot="extra" v-model="selectedIndex">
			<a-select-option v-for="(log, index) of changelogs" :key="index">
				{{log.version}}
			</a-select-option>
		</a-select>
		<a-collapse accordion>
			<a-collapse-panel v-if="additions.length > 0" header="New" key="new">
				<log-list :list="additions"/>
			</a-collapse-panel>
			<a-collapse-panel v-if="changes.length > 0" header="Changes" key="changes">
				<log-list :list="changes"/>
			</a-collapse-panel>
			<a-collapse-panel v-if="fixes.length > 0" header="Fixes" key="fixes">
				<log-list :list="fixes"/>
			</a-collapse-panel>
			<a-collapse-panel v-if="other.length > 0" header="Notes" key="other">
				<log-list :list="other"/>
			</a-collapse-panel>
		</a-collapse>
	</a-card>
</template>

<script>
import LogList from '@/components/ChangeLog/LogList.vue';
import changelogs from '@/changes/';

export default {
	data() {
		return {
			changelogs,
			selectedIndex: 0,
		};
	},
	components: {
		LogList,
	},
	computed: {
		selectedLog() {
			return this.changelogs[this.selectedIndex];
		},
		additions() {
			return this.selectedLog.log.additions;
		},
		changes() {
			return this.selectedLog.log.changes;
		},
		fixes() {
			return this.selectedLog.log.fixes;
		},
		other() {
			return this.selectedLog.log.other;
		},
	},
};
</script>
