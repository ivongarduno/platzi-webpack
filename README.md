Notas

MODO RECARGA EN CALIENTE

Con un aplicación grande y compleja suceden bastantes cambios. En lugar de recargar todo el html cada que hay un cambio podemos recargar solo las funciones necesarias

new webpack.HotModuleReplacementPlugin(),

Para modificar configuraciones por defecto:
devServer: {
hot: true,
},

funciona por webpack
export default text
