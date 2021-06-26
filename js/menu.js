window.onload = () => {

};

function obtieneAlturaMenu() {
    let alturaMenu = 0;

    const menu = document.querySelector("#menu-navegacion-principal");

    alturaMenu = menu.clientHeight;
    //test
    //console.log(alturaMenu);

    return alturaMenu;
}

function mueveSeccionHaciaAbajoDelMenu() {
    const menu = document.querySelector("#menu-navegacion-principal");

    menu.style.setProperty('position', 'sticky');
    menu.style.setProperty('top', 0);

    menu.addEventListener('click', (evento) => {
        const opcion = evento.target;
        // test
        // console.log(opcion);

        const opcionNodeName = opcion.nodeName;
        if (opcionNodeName === 'A') {
            let secciones = document.querySelectorAll("#cuerpo-principal section");
            secciones.forEach((elemento, index, array) => {

                const alturaMenu = obtieneAlturaMenu();
                elemento.style.setProperty('padding-top', alturaMenu + 'px');

                //test
                console.log(alturaMenu, "elemento.style.marginTop: ", elemento.style.marginTop);

            });
        }

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