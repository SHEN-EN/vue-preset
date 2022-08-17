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
				//  target: 'http://10.18.13.123:8181/',
				target: 'http://10.18.9.135:8181/',
				//  target: 'http://10.18.8.236:8181/',
				//target: 'http://10.18.13.175:8181/',
				// target: 'http://10.18.8.219:8181/',
				// target: 'http://10.18.8.141:8181/',
				//target: 'http://10.18.13.40:8181/',
				// target: 'http://10.18.13.223:8181/',	
				//target: 'http://10.18.13.45:8181/',
				// target: 'http://10.18.13.223:8181/',
				// target: 'http://10.18.8.230:8181/',
				//  target: 'http://10.18.13.40:8181/',
				// target: 'http://10.18.8.85:8181/',
				// target: 'http://10.18.13.151:8181/',
				// target: 'http://10.18.13.170:8181/',
				// target: 'http://10.18.8.131:8181/',
				// target: "http://10.18.8.174:8181",
				// target: "http://10.18.13.195:8181",
				// target: "http://10.18.13.181:8181",
				// target: "http://10.18.8.95:8182",
				// target: "http://10.18.8.177:8181/",
				pathRewrite: {
					'^/static': '/v2/static'
				}
			},
			'/docker': {
				target: 'http://10.18.9.135:8181/',
			},
			'^/static': {
				target: 'http://10.18.9.135:8181/v2',
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
