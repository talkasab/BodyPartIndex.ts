const TerserPlugin = require('terser-webpack-plugin');
const Webpack = require('webpack');
const Path = require('path');

/**
 * Returns if is dev.
 */
const isDev = () => !process.env.NODE_ENV;

/**
 * Returns the environment.
 */
const getEnvironment = () => {
    if (isDev()) {
        return 'dev';
    }

    return process.env.NODE_ENV;
};

/**
 * Returns the config.
 */
module.exports = {
    context: __dirname,
    entry: './src/index.ts',
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: isDev() ? 'source-map' : false,
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ],
        modules: [ '.', 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new Webpack.DefinePlugin({
            __ENV__: JSON.stringify(getEnvironment()),
            __VERSION__: JSON.stringify(process.env.LIB_VERSION)
        })
    ],
    mode: 'development',
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        compress: true,
        port: 9001,
        historyApiFallback: true,
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};