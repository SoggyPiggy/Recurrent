<style>
.changelog {
	display: flex;
	flex-direction: column;
}

.changelog > * {
	margin-bottom: 16px;
}
.changelog > *:last-child {
	margin-bottom: 0;
}

.changelog .ant-collapse .ant-collapse-content-box,
.changelog .ant-collapse .ant-list-item {
	padding: 4px 0;
}
</style>

<template>
	<div class="changelog">
		<a-card>
				<a-select v-model="selectedIndex" style="width:100%;">
					<a-select-option v-for="(log, index) of changelogs" :key="index">
						v{{log.version}} - {{log.title}}
					</a-select-option>
				</a-select>
		</a-card>
		<a-card v-if="showApp" title="App Change Log">
			<a-collapse accordion>
				<a-collapse-panel v-if="showAppAdditions" header="New" key="new">
					<log-list :list="appAdditions"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showAppChanges" header="Changes" key="changes">
					<log-list :list="appChanges"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showAppFixes" header="Fixes" key="fixes">
					<log-list :list="appFixes"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showAppNotes" header="Notes" key="notes">
					<log-list :list="appNotes"/>
				</a-collapse-panel>
			</a-collapse>
		</a-card>
		<a-card v-if="showCore" title="Core Game Change Log">
			<a-collapse accordion>
				<a-collapse-panel v-if="showCoreAdditions" header="New" key="new">
					<log-list :list="coreAdditions"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showCoreChanges" header="Changes" key="changes">
					<log-list :list="coreChanges"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showCoreFixes" header="Fixes" key="fixes">
					<log-list :list="coreFixes"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showCoreNotes" header="Notes" key="notes">
					<log-list :list="coreNotes"/>
				</a-collapse-panel>
			</a-collapse>
		</a-card>
	</div>
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
		showCore() {
			if (this.selectedLog.core.additions.length > 0) return true;
			if (this.selectedLog.core.changes.length > 0) return true;
			if (this.selectedLog.core.fixes.length > 0) return true;
			if (this.selectedLog.core.notes.length > 0) return true;
			return false;
		},
		showCoreAdditions() { return this.selectedLog.core.additions.length > 0 },
		coreAdditions() { return this.selectedLog.core.additions },
		showCoreChanges() { return this.selectedLog.core.changes.length > 0 },
		coreChanges() { return this.selectedLog.core.changes },
		showCoreFixes() { return this.selectedLog.core.fixes.length > 0 },
		coreFixes() { return this.selectedLog.core.fixes },
		showCoreNotes() { return this.selectedLog.core.notes.length > 0 },
		coreNotes() { return this.selectedLog.core.notes },

		showApp() {
			if (this.selectedLog.app.additions.length > 0) return true;
			if (this.selectedLog.app.changes.length > 0) return true;
			if (this.selectedLog.app.fixes.length > 0) return true;
			if (this.selectedLog.app.notes.length > 0) return true;
			return false;
		},
		showAppAdditions() { return this.selectedLog.app.additions.length > 0 },
		appAdditions() { return this.selectedLog.app.additions },
		showAppChanges() { return this.selectedLog.app.changes.length > 0 },
		appChanges() { return this.selectedLog.app.changes },
		showAppFixes() { return this.selectedLog.app.fixes.length > 0 },
		appFixes() { return this.selectedLog.app.fixes },
		showAppNotes() { return this.selectedLog.app.notes.length > 0 },
		appNotes() { return this.selectedLog.app.notes },
	},
};
</script>
