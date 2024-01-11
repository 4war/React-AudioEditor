import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export function buildLoaders() : webpack.RuleSetRule[] {
    const txtLoader: webpack.RuleSetRule = {
        test: /\.txt$/, use: 'raw-loader' 
    };

    const tsLodaer: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        txtLoader,
        tsLodaer
    ];
}