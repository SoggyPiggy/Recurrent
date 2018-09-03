<template>
	<a-list itemLayout="horizonal" :dataSource="list">
		<a-list-item slot="renderItem" slot-scope="item, index">
			<a-list-item-meta>
				<span slot="title">{{item}}</span>
			</a-list-item-meta>
		</a-list-item>
	</a-list>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			required: true,
		},
	},
};
</script>
