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
	padding: 4px 0px;
}
</style>

<template>
	<div class="changelog">
		<a-card>
				<a-select v-model="logIndex" style="width:100%;">
					<a-select-option v-for="(log, index) of changelogs" :key="index">
						v{{log.version}} - {{log.title}}
					</a-select-option>
				</a-select>
		</a-card>
		<a-card v-if="showApp" title="App Change Log">
			<a-collapse v-model="activeKey">
				<a-collapse-panel v-if="showAppAdditions" header="New" :key="`aNew${logIndex}`">
					<log-list :list="selectedLog.app.additions"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showAppChanges" header="Changes" :key="`aChanges${logIndex}`">
					<log-list :list="selectedLog.app.changes"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showAppFixes" header="Fixes" :key="`aFixes${logIndex}`">
					<log-list :list="selectedLog.app.fixes"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showAppNotes" header="Notes" :key="`aNotes${logIndex}`">
					<log-list :list="selectedLog.app.notes"/>
				</a-collapse-panel>
			</a-collapse>
		</a-card>
		<a-card v-if="showCore" title="Core Game Change Log">
			<a-collapse v-model="activeKey">
				<a-collapse-panel v-if="showCoreAdditions" header="New" :key="`cNew${logIndex}`">
					<log-list :list="selectedLog.core.additions"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showCoreChanges" header="Changes" :key="`cChanges${logIndex}`">
					<log-list :list="selectedLog.core.changes"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showCoreFixes" header="Fixes" :key="`cFixes${logIndex}`">
					<log-list :list="selectedLog.core.fixes"/>
				</a-collapse-panel>
				<a-collapse-panel v-if="showCoreNotes" header="Notes" :key="`cNotes${logIndex}`">
					<log-list :list="selectedLog.core.notes"/>
				</a-collapse-panel>
			</a-collapse>
		</a-card>
	</div>
</template>

<script>
import fs from 'fs';
import compareVersions from 'compare-versions';
import LogList from '@/components/ChangeLog/LogList.vue';

const changelogs = fs.readdirSync('./src/changes/')
	// eslint-disable-next-line global-require, import/no-dynamic-require
	.map(location => (require(`@/changes/${location}`).default))
	.sort((a, b) => compareVersions(b.version, a.version));

export default {
	data() {
		return {
			changelogs,
			activeKeyData: null,
			logIndex: 0,
		};
	},
	components: {
		LogList,
	},
	computed: {
		activeKey: {
			get() {
				return this.activeKeyData;
			},
			set(value) {
				this.activeKeyData = value[value.length - 1];
			},
		},
		selectedLog() {
			return this.changelogs[this.logIndex];
		},
		showCore() {
			if (this.selectedLog.core.additions.length > 0) return true;
			if (this.selectedLog.core.changes.length > 0) return true;
			if (this.selectedLog.core.fixes.length > 0) return true;
			if (this.selectedLog.core.notes.length > 0) return true;
			return false;
		},
		showCoreAdditions() { return this.selectedLog.core.additions.length > 0; },
		showCoreChanges() { return this.selectedLog.core.changes.length > 0; },
		showCoreFixes() { return this.selectedLog.core.fixes.length > 0; },
		showCoreNotes() { return this.selectedLog.core.notes.length > 0; },

		showApp() {
			if (this.selectedLog.app.additions.length > 0) return true;
			if (this.selectedLog.app.changes.length > 0) return true;
			if (this.selectedLog.app.fixes.length > 0) return true;
			if (this.selectedLog.app.notes.length > 0) return true;
			return false;
		},
		showAppAdditions() { return this.selectedLog.app.additions.length > 0; },
		showAppChanges() { return this.selectedLog.app.changes.length > 0; },
		showAppFixes() { return this.selectedLog.app.fixes.length > 0; },
		showAppNotes() { return this.selectedLog.app.notes.length > 0; },
	},
};
</script>
