const path = require('path')
const webpack = require('webpack')
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('pages', resolve('src/pages'))
            .set('static', resolve('src/static'))
    },
    configureWebpack: config => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                axios: 'axios',
                Vue: 'vue'
            })
        )
        config.devServer = {
            disableHostCheck: true,
            hot: true
        }
    },

    lintOnSave: undefined
}
