Notas

Plugins: extiende los poderes de los loaders para poder modificar y manipular los archivos

Anteriormente todo era trabajado con un archivo js que podía inyectar css en el código html

npm install mini-css-extract-plugin html-webpack-plugin --save-dev --save-exact

Ya no necesitamos "style-loader", (inyecta css del js al html)

Ahora hacemos uso de un plugin que obtendrá un archivo css minificado que se usara en el html:

importar un plugin como objeto:
{
loader: MiniCSSExtractPlugin.loader,
}

este plugin me va a generar un html dentro de dist al que le importe los bundles automaticamente
new HtmlWebpackPlugin({
title:'Plugins'
}),
