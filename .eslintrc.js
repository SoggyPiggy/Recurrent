module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'linebreak-style': 0,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
