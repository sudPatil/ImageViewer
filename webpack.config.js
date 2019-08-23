const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './public/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'client.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Image viewer',
            filename: 'index.html',
            template: `${__dirname}/public/index.html`
        })
    ],
    resolve:{
        extensions: ["*", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: '/node_modules/',
                use:['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port: 8082,
        open: true,
        contentBase: './build',
        open:'Google Chrome'
    } 
}