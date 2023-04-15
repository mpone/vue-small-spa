const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "/vue-small-spa/",
    transpileDependencies: [
        'vuetify'
    ],
})
