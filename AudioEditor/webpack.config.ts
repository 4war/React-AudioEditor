
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
    idDev: isDev
})

export default config;