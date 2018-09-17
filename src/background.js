// eslint-disable-next-line import/no-extraneous-dependencies
import { app, protocol, BrowserWindow } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
	createProtocol,
	installVueDevtools,
} from 'vue-cli-plugin-electron-builder/lib';
import ElectronStore from 'electron-store';
import { autoUpdater } from 'electron-updater';

const isDevelopment = process.env.NODE_ENV !== 'production';
if (isDevelopment) {
	// Don't load any native (external) modules until the following line is run:
	// eslint-disable-next-line global-require
	require('module').globalPaths.push(process.env.NODE_MODULES_PATH);
}

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;
let config;
let resizeTimeout = null;

function createConfig() {
	return new ElectronStore({
		defaults: {
			width: 800,
			height: 600,
		},
	});
}

const saveBounds = function saveWindowBounds() {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(() => {
		const maximized = mainWindow.isMaximized();
		if (maximized) {
			config.set('maximized', maximized);
		} else {
			config.set(mainWindow.getBounds());
			config.set('maximized', maximized);
		}
	}, 1000);
};

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true });
function createMainWindow() {
	const browserSettings = {
		minWidth: 800,
		minHeight: 600,
		width: config.get('width'),
		height: config.get('height'),
		x: config.get('x'),
		y: config.get('y'),
		backgroundColor: '#F0F2F5',
		show: false,
	};
	const window = new BrowserWindow(browserSettings);

	if (config.get('maximized')) window.maximize();

	window.show();

	window.on('resize', () => saveBounds());
	window.on('move', () => saveBounds());

	if (isDevelopment) {
		// Load the url of the dev server if in development mode
		window.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
		if (!process.env.IS_TEST) window.webContents.openDevTools();
	} else {
		createProtocol('app');
		//   Load the index.html when not in development
		window.loadURL(formatUrl({
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file',
			slashes: true,
		}));
	}

	window.on('closed', () => {
		mainWindow = null;
	});

	window.webContents.on('devtools-opened', () => {
		window.focus();
		setImmediate(() => {
			window.focus();
		});
	});

	return window;
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
	// on macOS it is common for applications to stay open until the user explicitly quits
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// on macOS it is common to re-create a window even after all windows have been closed
	if (mainWindow === null) {
		mainWindow = createMainWindow();
	}
});

// create main BrowserWindow when electron is ready
app.on('ready', async () => {
	if (isDevelopment && !process.env.IS_TEST) {
		// Install Vue Devtools
		await installVueDevtools();
	}
	autoUpdater.checkForUpdatesAndNotify();
	config = createConfig();
	mainWindow = createMainWindow();
});
