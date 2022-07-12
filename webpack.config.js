const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Webpack = require('webpack');
const Path = require('path');

/**
 * Returns if environment is dev.
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
 * Returns the plugins.
 */
const getPlugins = () => {
	const plugins = [
		new Webpack.DefinePlugin({
            __ENV__: JSON.stringify(getEnvironment()),
            __VERSION__: JSON.stringify(process.env.LIB_VERSION)
        })
	];

	if (isDev()) {
		plugins.push(
			new HtmlWebpackPlugin({
				template: 'public/index.html',
			})
		);
	}

	return plugins;
}

/**
 * Returns the config.
 */
module.exports = {
    context: __dirname,
    entry: './src/index.ts',
    output: {
        path: Path.resolve(__dirname, 'dist'),
		libraryTarget: 'umd',
        filename: 'index.js'
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
    plugins: getPlugins(),
    mode: 'development',
	devServer: {
        allowedHosts: 'all',
        compress: true,
        port: 9001,
        hot: true,
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