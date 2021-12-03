import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import createVitePlugins from "./vite/plugins";
import path from 'path'

export default defineConfig(({ mode, command }) => {
    const env = loadEnv(mode, process.cwd())
    return {
        plugins: createVitePlugins(env, command === 'build'),
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './'),
                '@': path.resolve(__dirname, './src')
            },

            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        },
        pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'scss',
                patterns: []
            }
        },
        server: {
            port: 47880,
            open: true,
            // proxy: {}
        }
    }
})
