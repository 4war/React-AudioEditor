import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolver';
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/config';

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true
        },
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options)
        },
        plugins: buildPlugins(options),
        devtool: options.isDev ? 'eval-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined
    };
}
