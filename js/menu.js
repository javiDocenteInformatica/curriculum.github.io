/**
 * WEBGRAFIA
 * =========
 * HTML DOM Style Object: https://www.w3schools.com/jsref/dom_obj_style.asp
 * CSSStyleDeclaration setProperty() Method: https://www.w3schools.com/jsref/met_cssstyle_setproperty.asp
 * element: https://developer.mozilla.org/es/docs/Web/API/Element
 */
// espera a cargar el documento
/*window.onload = () => {

};*/

function obtieneAlturaMenu() {
    let alturaMenu = 0;

    const menu = document.querySelector("#menu-navegacion-principal");

    alturaMenu = menu.clientHeight;
    //test
    //console.log(alturaMenu);

    return alturaMenu;
}

function clickEnMenu() {
    const menu = document.querySelector("#menu-navegacion-principal");

    menu.style.setProperty('position', 'sticky');
    menu.style.setProperty('top', 0);

    menu.addEventListener('click', (evento) => {
        const opcion = evento.target;
        // test
        // console.log(opcion);

        anyadePaddingEncabezados(opcion);

        resaltaOpcionMenu();

        /*
        const opcionId = opcion.dispatchEvent;

        switch (opcionId.toLowerCase()) {
            case 'op-sobre-mi':

                break;
            case 'op-mis-proyectos':
                break;
            case 'op-experiencia-laboral':
                break;
            case 'op-conocimientos':
                break;
            case 'op-idiomas':
                break;
            case 'op-estudios':
                break;
        }
        */


    });
}

function anyadePaddingEncabezados(opcion) {
    const opcionNodeName = opcion.nodeName;
    if (opcionNodeName === 'A') {
        let secciones = document.querySelectorAll("#cuerpo-principal section");
        secciones.forEach((elemento, index, array) => {

            const alturaMenu = obtieneAlturaMenu();
            elemento.style.setProperty('padding-top', alturaMenu + 'px');

            //test
            // console.log(alturaMenu, "elemento.style.marginTop: ", elemento.style.marginTop);

        });
    }
}

function resaltaOpcionMenu() {
    // obtenemos el menu sobre el que se va a resaltar opcion
    let menu = document.querySelector("#menu-navegacion-principal");
    menu.addEventListener('click', (evento) => {

        // opcion que se ha clicado
        let LIPulsado = obtieneElementoLI(evento.target);

        // todos los hijos li del menu
        let todosLI = menu.querySelectorAll("li");
        // recorremos todos los 
        todosLI.forEach((elemento, index, array) => {
            if (elemento === LIPulsado) {
                elemento.classList.add("resalta-opcion");
            } else {
                elemento.classList.remove("resalta-opcion");
            }

        });

        /*
        switch (liPulsado) {
            case 'A':
            case 'SPAN':
                let elementoPadre = elementoPulsado.parentNode;
                if ()
                    break;
        }*/

    });
}

function obtieneElementoLI(elemento) {
    // test
    // console.log('obtieneElementoLI: ', elemento.nodeName);
    if (elemento.nodeName === 'LI') {
        // test
        // console.log("elemento.nodeName === 'LI'", elemento.nodeName);
        return elemento;
    } else {
        if (elemento !== null) {
            let elementoPadre = elemento.parentNode;
            return obtieneElementoLI(elementoPadre);
        } else {
            return null;
        }
    }
}