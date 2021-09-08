/**
 * WEBGRAFÍA
 * =========
 * 
 */

// CONSTANTES
const rutaDatosJSON = "../docs/datos_cv.json";



// A realizar cuando la página esté cargada
window.addEventListener("load", () => {
    cambiaFuentes();
    clickEnMenu();
   // insertaEnCuerpoPrincipal(seccionSobreMi());
   
});


// FUNCIONES
const insertaEnCuerpoPrincipal = (elemento)=>{
    let main = document.querySelector("#cuerpo-principal");
    main.insertAdjacentHTML("beforeend",elemento);
};