Notas

npm init

Dependencias:
npm i webpack --save  
--save guarda la referencia a webpack en package.json

npm i webpack -D -E ó npm i webpack@version -D

-D significa --save-dev  guardar como dependencia de desarrollo
-E significa --save-exact para instalar la versión exacta del package.json

npm i webpack-cli@3.3.2 -D

npx webpack  llama solamente a las dependencias especificas de este proyecto

npx webpack --entry ./index.js --output ./bundle.js --mode development
indica el archivo de entrada y el nombre del archivo de salida
--mode indica si está en modo de desarrollo, si omitimos se queda en producción

webpack.config.js
para personalizar las configuraciones y evitar escribir los comando tan extensos

al ejecutar npx webpack identifica el archivo de configuración y ejecuta las configuarciones