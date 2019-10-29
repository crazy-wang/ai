// vue.config.js 导出一个包含了选项的对象：
module.exports = {
    // 选项...
    baseUrl: '/',
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://aip.baidubce.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}