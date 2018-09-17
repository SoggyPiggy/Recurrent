export default {
	title: 'Save Support!',
	version: '0.3.0',
	core: {
		additions: [
			'Progress Saving (More in notes)',
		],
		changes: [],
		fixes: [
			'Spelling of some words.',
		],
		notes: [
			'Progress saving saves the progress you make with everything, but the game is still a pre-release \'v0.X.X\' so progress may be reset if absolutely needed. That shouldn\'t happen though.',
		],
	},
	app: {
		additions: [
			'Home tab: Feedback',
			'Home tab: About (Disabled)',
			'Auto-Updating (More in notes)',
		],
		changes: [
			'Character Creation Information: Name has a 16 character limit',
			'Change Log interaction cleaned up a bit',
		],
		fixes: [
			'Multiple instances of the app being mounted to the DOM',
		],
		notes: [
			'Auto-Updating checks and updates in the background when the app is started. The update isn\'t applied until the next time the game is opened. This is a silent process and does not let you know when it happens. Will add more support for it later.',
		],
	},
};
