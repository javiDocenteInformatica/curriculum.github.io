/**
 * WEBGRAFÍA
 * =========
 * JavaScript Array map() Method: https://www.w3schools.com/jsref/jsref_map.asp
 * HTML DOM Style Object: https://www.w3schools.com/jsref/dom_obj_style.asp
 * HTML DOM parentElement Property: https://www.w3schools.com/jsref/prop_node_parentelement.asp
 * HTML DOM parentNode Property: https://www.w3schools.com/jsref/prop_node_parentnode.asp
 * HTML DOM nodeName Property: https://www.w3schools.com/jsref/prop_node_nodename.asp
 * JavaScript String toUpperCase() Method: https://www.w3schools.com/jsref/jsref_touppercase.asp
 * Plantillas literales (plantillas de cadenas): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
 * Unidades de medida en CSS (Px, Porcentajes, Em y Rem): https://franciscoamk.com/unidades-de-medida-en-css/#:~:text=La%20unidad%20de%20medida%20rem,em%20basado%20en%20la%20ra%C3%ADz.
 * 
 */
window.onload = () => {
    // tamanyoFuenteNormalEncabezadosH();
};


function cambiaFuentes() {
    cambiaFuenteAElementosDentroDeEncabezados();
}

/**
 * Función que cambia los tamaño de fuente de los elementos hijos de encabezados(h1...h6).
 */
function cambiaFuenteAElementosDentroDeEncabezados() {
    let array_hijos_h_tags = document.querySelectorAll('h1 > *, h2 > *, h3 > *, h4 > *, h5 > *, h6 > *');

    array_hijos_h_tags.forEach(function(element, index, arr) {
        // test
        // console.log("element: ", element);

        let nodoPadre = element.parentNode; // devuelve el nodo padre del elemento
        let stringNodoPadre = nodoPadre.nodeName; // devuelve una cadena con la etiqueta del nodo padre en mayúsculas

        // test
        // console.log("nodoPadre: ", nodoPadre);
        // console.log("stringNodoPadre: ", stringNodoPadre);

        // fuente que deben llevar los elementos hijos
        element.classList.add("ff-jomhuria");

        switch (stringNodoPadre.toUpperCase()) {
            case 'H1':
                element.classList.add("fs-h1");
                break;
            case 'H2':
                element.classList.add("fs-h2");
                break;
            case 'H3':
                element.classList.add("fs-h3");
                break;
            case 'H4':
                element.classList.add("fs-h4");
                break;
            case 'H5':
                element.classList.add("fs-h5");
                break;
            case 'H6':
                element.classList.add("fs-h6");
                break;
            default:
                element.classList.add("fs-normal");
                break;
        }

        //test
        // console.log(`${element} : ${element.style.font}`);
    });
}