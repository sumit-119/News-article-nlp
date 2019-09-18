const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
    devServer: {
        host: "localhost",
        port: "4500",
        proxy: [{
            context: ["/newsArticleTest", "/textTest"],
            target: "http://localhost:8000"
        }],
        hot: true,
        overlay: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        historyApiFallback: true
    },
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle-[hash].min.js",
        libraryTarget: "var",
        library: "Client"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            hash: true,
            xhtml: true
        })
    ]
}