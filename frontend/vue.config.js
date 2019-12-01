module.exports = {
    outputDir: 'dist/public',
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        proxy: {
            "^/api": {
                target: "http://localhost:8088",
                ws: true,
                changeOrigin: true
            }
        }
    }
}
