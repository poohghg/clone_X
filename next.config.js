const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const nextConfig = {
    plugins: [
        stylexPlugin({
            aliases: {
                '@/*': [path.join(__dirname, '*')],
            },
            rootDir: __dirname,
        })({})
    ]
}

module.exports = nextConfig