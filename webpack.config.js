//permite trabajar con rutas sin importar window linux
const path = require('path')

module.exports = {
    entry: './index.js',
    mode:'development',
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    }
}