const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false, //生产环境关闭sourceMap
    filenameHashing: true, //文件哈希
    devServer: {
        proxy: {
            '/v2': {

                pathRewrite: {
                    '^/static': '/v2/static'
                }
            },
            '^/static': {

            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": resolve("src"),
            },
            extensions: ['.js', '.vue', '.json']
        }
    },
}
