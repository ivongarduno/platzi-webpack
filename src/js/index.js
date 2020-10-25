import "../css/index.css";
import text from "./text";

text();

//Para evitar que se recargue todo el navegador
//esto no hay que hacerlo con react y vue, lo hacen por defecto
if(module.hot){
    module.hot.accept('./text.js',function(){
        console.log('he recargado en caliente')
        text()
    })
}
