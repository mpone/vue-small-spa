const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-small-spa/'
        : '/',
    transpileDependencies: ['vuetify']
})
