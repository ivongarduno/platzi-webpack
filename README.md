Notas

MODO RECARGA EN CALIENTE

Con un aplicación grande y compleja suceden bastantes cambios. En lugar de recargar todo el html cada que hay un cambio podemos recargar solo las funciones necesarias

new webpack.HotModuleReplacementPlugin(),

funciona por webpack
export default text

Reemplazo de módulo en caliente (HMR) se basa en el WDS. Habilita una interfaz que hace posible intercambiar módulos en vivo. Por ejemplo, style-loader puede actualizar su CSS sin forzar una actualización. La implementación de HMR para estilos es ideal porque CSS no tiene estado por diseño.

Para modificar configuraciones por defecto:
devServer: {
    hot: true,
    open:true,  --> abre una pestaña del navegador
    port: 9000,
},

PARA PRODUCCION SIRVEN LOS ARCHIVOS CSS MINIFICADOS
PARA DESARROLLO SIRVE INYECTAR EL CSS COMO MODULO EN MI JS