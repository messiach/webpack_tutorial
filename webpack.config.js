var path = require('path');

/* javascript configuration object for webpack */
module.exports = {
    // webpack entry point (where to start gathering dependencies)
    entry: './src/js/app.js',

    // webpack exit point (what to produce)
    output: {
                            // __dirname = current directory
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        // rules is a list of javascript objects - each rule being a javascript object
        rules: [
            {
                test: /\.css$/,
                // to load and apply css to components, we need both a css-loader and style-loader (to apply them)
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
}