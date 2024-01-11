import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolver";

export function buildWebpackConfig(options: BuildOptions) :  webpack.Configuration {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.build,
            clean: true
        },
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders(),
        },
        plugins: buildPlugins(options),
    }
}