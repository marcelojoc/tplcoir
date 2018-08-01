const  BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path');



module.exports = {

     //   entry: path.resolve(__dirname, 'login.html'),
     //   output: {
     //     path: path.resolve(__dirname, 'dist'),
     //     filename: 'bundle.js',
     //   },


        devServer: {
          contentBase: path.join(__dirname, "dist"),
          // compress: true,
          port: 9000,
          compress: true, // Comprime los archivos (gzip)
          publicPath:  "/public/",  // Los archivos estarán disponibles en esa ruta
          // after(app){
          //   console.log('======== after ==========')
          //   console.log(app)
          //   // do fancy stuff
          // },
          // before(app) {
          //   console.log('======== before =========')
          //   console.log(app)
          // }
        },

}
