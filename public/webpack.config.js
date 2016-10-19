const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'dist',
        publicPath: 'dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                include: /style/,
                loaders: ['style', 'css','autoprefixer?browsers=last 3 versions','sass?outputStyle=expanded', ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
