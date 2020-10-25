Notas

ACTUALIZAR BUILD COMPILADO
Creación de una tarea que compile los bundle cada que hay un cambio

"build:dev":"webpack --config ./webpack.config.js --watch"

"build:dev":"webpack --config ./webpack.config.js -w"

o al ejecutar el script agregamos la bandera

npm run build:dev -- -w

WEBPACK DEV SERVER

Para recargar el navegador cada que hay un cambio y utilizar un servidor en localhost:8080

npm install -D --save-exact webpack-dev-server

Remplazamos el comando webpack por un CLI:   webpack-dev-server

tampoco es necesario utilizar la bandera -w ya que se realiza en automatico al usar el dev-server

"build:dev": "webpack-dev-server --config ./webpack.config.js"