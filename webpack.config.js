//permite trabajar con rutas sin importar window linux
const path = require('path')

module.exports = {
    entry: './index.js',
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    }
}