module.exports = {
    outputDir: 'dist/public',
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        port: 8088,
        proxy: {
            "^/api": {
                target: "http://localhost:8080",
                ws: true,
                changeOrigin: true
            }
        }
    }
}
