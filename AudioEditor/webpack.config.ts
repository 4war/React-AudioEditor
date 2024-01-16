import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import { BuildEnv } from 'config/build/types/config';

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const port = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html'),
        },
        isDev: isDev,
        port: port,
    });

    return config;
};
