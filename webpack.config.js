const path = require('path');

module.exports = {
    entry: {
        index: '/src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        library: 'test',
        libraryTarget: 'umd',
    }
}