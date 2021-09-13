/**
  WEBGRAFÍA
  =========
    + JSON
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON
    
    + Trabajando con JSON
        https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON

    + JSON.parse()
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

    + JSON.stringify()
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

    + JavaScript Array Reference
        https://www.w3schools.com/jsref/jsref_obj_array.asp

    + Get the last item in an array
        https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array

 */


/*
const leeJson = (rutaArchivo) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
    
        reader.onload = res => {
          resolve(res.target.result);
        };
        reader.onerror = err => reject(err);
    
        reader.readAsText(file);
      });
}
*/

window.onload = ()=>{
    //seccionSobreMi();
}



const seccionSobreMi = () => {

    // RECORRE LOS DATOS
    /*
    for(let seccion in datos){
        console.log(seccion);
        for(let articulo in datos[seccion]){
            console.log("\t"+articulo);
            for(let campo of datos[seccion][articulo]){
                console.log("\t\t"+campo);
            }
        }
    }
    */

    let resultado = `
    <div class="seccion">
        <section>
        `;
        for(let seccion in datos){
            resultado += 
            `<h1>${seccion}</h1>`;
            for(let articulo in datos[seccion]){
                
                switch(articulo){
                    case DESCRIPCION: 
                    break;
                    default:
                        resultado +=
                        `<h2>${articulo}</h2>`;
                    break;

                }
                resultado +=
                `
                <article>
                `;

                for(let campo of datos[seccion][articulo]){
                    switch(articulo){
                        case DESCRIPCION:
                            resultado +=
                            `
                            <p>${campo}</p>
                            `;
                        break;
                        case CONTACTO:
                        
                            for(let indiceSubCampo in campo){
                                
                                resultado +=
                                `
                                <i class="fas fa-caret-right space"></i>
                                <span>${indiceSubCampo} : </span>
                                `;
                                for(let valorSubCampo of campo[indiceSubCampo]){
                                    console.log("length: "+campo[indiceSubCampo].length-1);
                                    console.log("indice: "+campo[indiceSubCampo].indexOf(valorSubCampo));
                                    if(campo[indiceSubCampo].length-1 == campo[indiceSubCampo].indexOf(valorSubCampo)){
                                        resultado +=
                                        `
                                           <span>${valorSubCampo}</span>
                                        </br>
                                        `;
                                    }else{
                                        resultado +=
                                        `
                                           <span>${valorSubCampo},</span>
                                        </br>
                                        `;
                                    }
                                }
                            }
                        break;
                        default:
                            resultado +=
                            `
                            <i class="fas fa-caret-right space"></i>
                            <span>${campo}</span>
                            </br>
                            `;
                        break;
                    }
                    
                }

                resultado += `   
                </article>
                `;
            }
        }
          
    resultado += 
    `
        </section>
    </div>
        
    `;
    //console.log(resultado);
    return resultado;
    
}