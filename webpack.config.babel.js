import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export default () => ({
    devServer: {
        contentBase: `/`,
        historyApiFallback: {
            rewrites: [{from: /./, to: `/index.html`}]
        },
        open: true,
        port: 9090,
        publicPath: `/homePage`,
        proxy: [{
            context: ['/api', '/endpoint'],
            target: {
                host: "localhost",
                protocol: 'http:',
                port: 8090
            }
        }]
    },
    entry: {
        index: path.join(__dirname, 'src/main/resources/js/app/index.js')
    },
    output: {
        filename: 'assets/javascripts/[hash].js',
        path: path.join(__dirname, 'src/main/resources/static'),
        publicPath: `/homePage`
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                include: path.join(__dirname, 'src/main/js/'),
                test: /\.js?$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(ico|png|gif|jpe?g)$/,
                use: {
                    loader: 'file-loader',
                    options: {name: 'assets/images/[name]/[hash].[ext]'}
                }
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {name: 'assets/fonts/[name]/[hash].[ext]'}
                }
            },
            {test: /\.html$/, use: 'html-loader'},
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'src/main/js'],
        symlinks: false
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {ASSET_PATH: JSON.stringify('/')}
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/stylesheets/[name]/[hash].css'
        }),
        new HtmlWebpackPlugin({
            appMountId: 'root',
            filename: 'index.html',
            inject: false,
            template: HtmlWebpackTemplate,
            title: 'React-Start'
        })
    ]
});