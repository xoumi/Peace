const storeData = require('./util');

const colors = require('./colors');
const tokenColors = require('./tokens');

const name = 'Peace';
const type = 'dark';

storeData({ name, type, colors, tokenColors }, 'themes/Peace-color-theme.json');