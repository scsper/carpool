module.exports = {
    entry: './src/browser/launch.js',
    output: {
        path: 'public',
        filename: 'bundle.js',
        sourceMapFilename: '[file].map'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx-loader?insertPragma=React.DOM'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader'
        }]
    }
};
