/**
  WEBGRAFÍA
  =========
    + JavaScript Classes
        https://www.w3schools.com/js/js_classes.asp  

    + Class basic syntax
        https://javascript.info/class
    + 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

    + “javascript class getter setter” Code Answer’s
        https://www.codegrepper.com/code-examples/javascript/javascript+class+getter+setter
    
 */

    window.addEventListener("load",()=>{
        
    });


// CURRICULUM
class CVClass {

    constructor(sobreMiObject, proyectosRealizadosObject,experienciasLaboralesObject, conocimientosObject, idiomasObject, estudiosObject){
        this.sobreMi = sobreMiObject;
        this.proyectosRealizados = proyectosRealizadosObject;
        this.experienciasLaborales = experienciasLaboralesObject;
        this.conocimientos = conocimientosObject;
        this.idiomas = idiomasObject;
        this.estudios = estudiosObject;
    }

    // getters y setters
    get getSobreMi(){
        return this.sobreMi;
    }

    set setSobreMi(nuevoSobreMiObject){
        this.sobreMi = nuevoSobreMiObject;
    }

    get getProyectosRealizados(){
        return this.proyectosRealizados;
    }

    set setProyectosRealizados(nuevosProyectosRealizadosObject){
        this.proyectosRealizados = nuevosProyectosRealizadosObject;
    }

    get getExperienciasLaborales(){

    }

    set setExperienciasLaborales(nuevoExperienciasLaboralesObject){

    }

    get getConocimientos(){
        return this.conocimientos;
    }

    set setConocimientos(nuevoConocimientosObject){
        this.conocimientos = nuevoConocimientosObject;
    }

    get getIdiomas(){
        return this.idiomas;
    }

    set setIdiomas(nuevoIdiomasObject){
        this.idiomas = nuevoIdiomasObject;
    }

    get getEstudios(){
        return this.estudios;
    }

    set setEstudios(nuevoEstudiosObject){
        this.estudios = nuevoEstudiosObject;
    }

}

// SOBRE MI
class SobreMiClass{
    constructor(){
        this.descripcion = "";
        this.listaAptitudes = [];
        this.listaIntereses = [];
        this.listaHobbies = [];
        // this.contacto = new ContactoClass();
    }
    
    // getters y setters
    get getDescripcion(){
        return this.descripcion;
    }

    set setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }

    get getListaAptitudes(){
        return this.listaAptitudes;
    }

    set setListaAptitudes(nuevaListaAptitudes){
        this.listaAptitudes = nuevaListaAptitudes;
    }

    get getListaIntereses(){
        return this.listaIntereses;
    }

    set setListaIntereses(nuevaListaIntereses){
        this.listaIntereses = nuevaListaIntereses; 
    }

    get getListaHobbies(){
        return this.listaHobbies;
    }

    set setListaHobbies(nuevaListaHobbies){
        this.listaHobbies = nuevaListaHobbies;
    }

    // otros métodos
    anyadeAptitud(nuevaAptitudObject){
        this.listaAptitudes.push(nuevaAptitudObject);
    }

    anyadeInteres(nuevoInteresObject){
        this.listaIntereses.push(nuevoInteresObject);
    }

    anyadeHobby(nuevoHobbyObject){
        this.listaHobbies.push(nuevoHobbyObject);
    }
}


class ContactoClass{

    constructor(){
        this.listaTelefonos = [];
        this.listaEmails = [];
        this.listaRedesSociales = [];
    }

    // getters y setters
    get getListaTelefonos(){
        return this.listaTelefonos;
    }

    set setListaTelefonos(nuevoListaTelefonos){
        this.listaTelefonos = nuevoListaTelefonos;
    }

    get getListaEmails(){
        return this.listaEmails;
    }

    set setListaEmails(nuevoListaEmails){
        this.listaEmails = nuevoListaEmails;
    }

    get getListaRedesSociales(){
        return  this.listaRedesSociales;
    }

    set setListaRedesSociales(nuevoListaRedesSociales){
        this.listaRedesSociales = nuevoListaRedesSociales;
    }

    // otros métodos
    anyadeTelefono(nuevoTelefonoObject){
        this.listaTelefonos.push(nuevoTelefonoObject);
    }

    anyadeEmail(nuevoEmailObject){
        this.listaEmails.push(nuevoEmailObject);
    }

    anyadeRedSocial(nuevaRedSocialObject){
        this.listaRedesSociales.push(nuevaRedSocialObject);
    }
}

class TelefonoClass{
    constructor(numeroTelefono){
        this.numeroTelefono = numeroTelefono;
    }

    // getters y setters
    get getNumeroTelefono(){
        return this.numeroTelefono;
    }

    set setNumeroTelefono(nuevoNumeroTelefono){
        this.numeroTelefono = nuevoNumeroTelefono;
    }
    
}

class EmailClass{
    
    constructor(email){
        this.email = email;
    }

    //getters y setters
    get getEmail(){
        return this.email;
    }

    set setEmail(nuevoEmail){
        this.email = nuevoEmail;
    }
}

class RedSocialClass{
    
    constructor(redSocial,enlace){
        this.nombre = redSocial;
        this.enlace = enlace;
    }
    
    //getters y setters
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nuevaRedSocial){
        this.nombre = nuevaRedSocial;
    }

    get getEnlace(){
        return this.enlace;
    }

    set setEnlace(nuevoEnlace){
        this.enlace = nuevoEnlace;
    }
}

// PROYECTO
class ProyectosRealizadosClass{

    constructor(){
        this.listaProyectos = []
    }

    // getters y setters
    get getListaProyectos(){
        return this.listaProyectos;
    }

    set setListaProyectos(nuevaListaProyecto){
        this.listaProyectos = nuevaListaProyecto;
    }

    // otros métodos
    anyadeProyecto(nuevoProyectoObject){
        this.listaProyectos.push(nuevoProyectoObject);
    }
}

class ProyectoRealizadoClass{

    constructor(titulo, descripcion, enlace){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }

    // getters y setters
    get getTitulo(){
        return this.titulo;
    }

    set setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    get getDescripcion(){
        return this.descripcion;
    }

    set setDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion;
    }

    get getEnlace(){
        return this.enlace;
    }

    set setEnlace(nuevoEnlace){
        this.enlace = nuevoEnlace;
    }

}

// EXPERIENCIA LABORAL
class ExperienciasLaborales{

    constructor(titulo){
        this.titulo = titulo;
        this.listaExperiencias = [];
    }

    // getters y setters
    get getTitulo(){
        return this.titulo;
    }
    
    set setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    get getListaExperiencias(){
        return this.listaExperiencias;
    }

    set setListaExperencias(nuevaListaExperiencias){
        this.listaExperiencias = nuevaListaExperiencias;
    }

    // otros métodos
    anyadeExperiencia(nuevaExperienciaObject){
        this.listaExperiencias.push(nuevaExperienciaObject);
    }
}

class ExperienciaLaboral{

    constructor(titulo, enlace, fechaInicio, fechaFin){
        this.titulo = titulo;
        this.enlace = enlace;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    
    // getters y setters
    get getTitulo(){
        return this.titulo;
    }

    set setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    get getEnlace(){
        return this.enlace;
    }

    set setEnlace(nuevoEnlace){
        this.enlace = nuevoEnlace;
    }

    get getFechaInicio(){
        return this.fechaInicio;
    }

    set setFechaInicio(nuevaFechaInicio){
        this.fechaInicio = nuevaFechaInicio;
    }

    get getFechaFin(){
        return this.fechaFin;
    }

    set setFechaFin(nuevaFechaFin){
        this.fechaFin = nuevaFechaFin;
    }
}

// CONOCIMIENTO
class ConocimientosClass{
    
    constructor(){
        this.listaConocimientos = [];    
    }

    // getters y setters
    get getListaConocimientos(){
        return this.listaConocimientos;
    }

    set setListaConocimientos(nuevaListaConocimientos){
        this.listaConocimientos = nuevaListaConocimientos;
    }

    // otros métodos
    anyadeConocimiento(nuevoConocimientoObject){
        this.listaConocimientos.push(nuevoConocimientoObject);
    }
}

class ConocimientoClass{
    
    constructor(titulo, nivel){
        this.titulo = titulo;
        this.nivel = nivel;
    }

    // getters y setters
    get getTitulo(){
        return this.titulo;
    }
    
    set setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    get getNivel(){
        return this.nivel;
    }

    set setNivel(nuevoNivel){
        this.nivel = nuevoNivel;
    }
    
}

// IDIOMA
class IdiomasClass{

    constructor(titulo){
        this.titulo = titulo;
        this.listaIdiomas = [];
    }
    
    // getters y setters
    get getTitulo(){
        return this.titulo;
    }

    set setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    get getListaIdiomas(){
        return this.listaIdiomas;
    }

    set setListaIdiomas(nuevaListaIdiomas){
        this.listaIdiomas = nuevaListaIdiomas;
    }

    // otros métodos
    anyadeIdioma(nuevoIdiomaObject){
        this.listaIdiomas.push(nuevoIdiomaObject);
    }
}

class IdiomaClass{

    constructor(titulo, nivel, fechaFin){
        this.titulo = titulo;
        this.nivel = nivel;
        this.fechaFin = fechaFin;
    }

    // getters y setters
    get getTitulo(){
        return this.titulo;
    }

    set setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    get getNivel(){
        return this.nivel;
    }

    set setNivel(nuevoNivel){
        this.nivel = nuevoNivel;
    }

    get getFechaFin(){
        return this.fechaFin;
    }

    set setFechaFin(nuevaFechaFin){
        this.fechaFin = nuevaFechaFin;
    }
    
}

// ESTUDIOS
class EstudiosClass{

    constructor(titulo){
        this.titulo = titulo;
        this.listaEstudios = []
    }

    // getters y setters
    get getTitulo(){
        return this.titulo;
    }

    set setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    get getListaEstudios(){
        return this.listaEstudios;
    }

    set setListaEstudios(nuevaListaEstudios){
        this.listaEstudios = nuevaListaEstudios;
    }

    // otros métodos
    anyadeEstudio(nuevoEstudioObject){
        this.listaEstudios.push(nuevoEstudioObject);
    }
    
}

class EstudioClass{

    constructor(titulo, fechaFin){
        this.titulo = titulo;
        this.fechaFin = fechaFin;
    }

    // getters y setters
    get getTitulo(){
        return this.titulo;
    }

    set setTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo;
    }

    get getFechaFin(){
        return this.fechaFin;
    }

    set setFechaFin(nuevaFechaFin){
        this.fechaFin = nuevaFechaFin;
    }
    
}


