/**
 *
 * 说明：vue配置信息
 */
const webpack = require('webpack');
const webpackBundleAnalyzer  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path  = require('path');
const bannerOptions = {
    banner: "@Author:TravelAlone 时间:"+new Date(),
    raw: false,
    entryOnly: false,
};
function pathResolve(url){
    return path.join(__dirname,url)
}
console.log("NODE:",process.env)
module.exports ={
    publicPath:process.env.NODE_ENV === 'production'
    ? './' : "/",
    outputDir:'dist',//输出打包之后的目录
    assetsDir:'static',//静态资源放置文件夹
    productionSourceMap:false,
    runtimeCompiler:true,
    css: {
        extract: true,
        sourceMap: false,
        requireModuleExtension: false,
    },
    configureWebpack:{
        resolve:{
              alias:{
                  "@":pathResolve('src'),
                  "assets":pathResolve('src/assets'),
                  "components":pathResolve('src/component'),
                  "views":pathResolve('src/views'),
              }
        },
        plugins: [
            new webpack.BannerPlugin(bannerOptions),
        ],
        optimization: {
            runtimeChunk: {
                name: 'manifest'
            },
            splitChunks: {
                cacheGroups: {
                    vueLibs:{
                        chunks:"all",
                        test: /node_modules\/(vuex|vue-router|vue-class-component)/,
                        name:"vue_libs",
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority:100,
                    },
                    vendor:{
                        chunks:"all",
                        test: /node_modules/,
                        name:"vendor",
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority:90,
                    },
                }
            }
        }
    },
    chainWebpack:(config)=>{
        // if (process.env.NODE_ENV === 'production'){
        //     config.plugin('report')
        //         .use(webpackBundleAnalyzer, [{
        //             analyzerMode: 'server',
        //         }]);
        // }

    },
    // transpileDependencies: [],
    devServer:{
        open:true,//自动打开浏览器
    }

};

