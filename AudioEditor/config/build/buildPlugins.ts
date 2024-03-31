import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(
    options: BuildOptions
): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: options.paths.html }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev)
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })

        // "hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
        // new ReactRefreshWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ];
}
