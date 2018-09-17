import compareVersions from 'compare-versions';

const files = require.context('.', false, /\.js$/);
export default files.keys()
	.filter(key => key !== './index.js')
	.map(key => files(key).default)
	.sort((a, b) => compareVersions(b.version, a.version));
