const pkg = require('../../package.json');

const manifestInput = {
    manifest_version: 2,
    name: 'Nice Try Scribd',
    version: pkg.version,

    icons: {
        '16': 'assets/icons/favicon-16.png',
        '32': 'assets/icons/favicon-32.png',
        '48': 'assets/icons/favicon-48.png',
        '128': 'assets/icons/favicon-128.png',
    },

    description: 'Duh!',
    homepage_url: 'https://github.com/abhijithvijayan/web-extension-starter',
    short_name: 'Nice Try Scribd',

    permissions: ['http://*.scribd.com/*', 'https://*.scribd.com/*'],
    content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",

    '__chrome|firefox__author': 'abhijithvijayan',
    __opera__developer: {
        name: 'abhijithvijayan',
    },

    __firefox__applications: {
        gecko: { id: '{754FB1AD-CC3B-4856-B6A0-7786F8CA9D17}' },
    },

    __chrome__minimum_chrome_version: '49',
    __opera__minimum_opera_version: '36',

    content_scripts: [
        {
            matches: ['https://*.scribd.com/*'],
            js: ['js/contentScript.bundle.js'],
        },
    ],
};

module.exports = manifestInput;
