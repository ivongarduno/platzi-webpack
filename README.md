Notas

el archivo de configuracion en la carpeta external sera ejecutado con el comando build:external, el cual también puede ser nombrado como nosotros quieramos

"build:external":"webpack --config ./external/webpack.config.js"

--config indica en donde localizar la configuaración personalizada

Comando de ejecución manual con webpack CLI:
"build": "webpack --entry ./index.js --output ./bundle.js --mode development"

Comando que ejecuta el archivo webpack.config.js por default y en modo de producción:
"build:local": "webpack --mode production"