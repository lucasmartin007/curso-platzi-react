const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");

const path = require("path");

const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
    output:{
        filename:'app.bundle.js',
        publicPath:'/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new WebpackPwaManifestPlugin({
            name: "Petgram - Tu app de fotos de mascotas",
            shortname: "Petgram",
            description: "Con Petgram puedes encontrar fotos de animales domesticos",
            background_color: "#fff",
            theme_color: "#b1a",
            icons:[
                {
                    src: path.resolve("src/assets/icon.png"),
                    sizes: [96, 128, 192, 256, 384, 512]
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching:[
                {
                    urlPattern: new RegExp("https://(res.cloudinary.com|images.unsplash.com)"),
                    handler: "CacheFirst",
                    options:{
                        cacheName: "images"
                    }
                },
                {
                    urlPattern: new RegExp("https://petgram-server-gamma-three.vercel.app"),
                    handler: "NetworkFirst",
                    options:{
                        cacheName: "api"
                    }
                }
            ]
        })
    ],
    mode:'development',
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options:{
                    plugins: ["@babel/plugin-syntax-dynamic-import"],
                    presets: [ '@babel/preset-env', '@babel/preset-react' ]
                }
            }
        }]
    }
}