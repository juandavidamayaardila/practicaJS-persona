import {data} from "../source/data.js";

//console.log("prueba", data);
var tempNombre = "Des"
var tempEdad = "Des";
const container = document.querySelector("#container");


const table = document.createElement("table");
const trHead = document.createElement("tr");
const thNombre = document.createElement("th");
const thApellido = document.createElement("th");
const thEdad = document.createElement("th");
const thEmail = document.createElement("th");
const thTelefono = document.createElement("th");

thNombre.textContent = "Nombre";
thApellido.textContent = "Apellido";
thEdad.textContent = "Edad";
thEmail.textContent = "Email";
thTelefono.textContent = "Telefono";


trHead.append(thNombre, thApellido,thEdad, thEmail, thTelefono);
table.append(trHead)

data.map( dato => {
    const trBody = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdApellido = document.createElement("td");
    const tdEdad = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdTelefono = document.createElement("td");

    trBody.append(tdNombre,tdApellido,tdEdad,tdEmail,tdTelefono);

    tdNombre.textContent = dato.nombre;
    tdApellido.textContent =dato.apellidos;
    tdEdad.textContent = dato.edad;
    tdEmail.textContent = dato.email;
    tdTelefono.textContent = dato.telefono;

    table.appendChild(trBody);

})


container.append(table);


/**
 * Agregamos el evento al cabezal de la tabla nombre
 * y pasamos una funcion callback, para esperar hasta 
 * que se orden los datos. 
 */
thNombre.addEventListener('click', async (e) => {
    if (tempNombre === "Des") {
         ordenarAsce()
         .then( mostrarDatos() )
         .catch();
    } else {
        ordenarDesc()
        .then( mostrarDatos() )
        .catch( );
     }
    
});

/**
 * Agregamos el evento al cabezal de la tabla Edad
 * y pasamos una funcion callback, para esperar hasta 
 * que se orden los datos. 
 */
thEdad.addEventListener('click', async (e) =>{

    if (tempEdad === "Des") {
        await orderAgeAsc();
    } else {
        orderAgeDesc();
     }

});

/**
 * Retornamos una promesa con la lista ordenada.
 * usamos funcion de fleha para resolver el ordenamiento.
 * 
 * @returns Promesa
 */
const ordenarDesc = () => new Promise ( () =>{
    tempNombre = "Des"
    const listaOrdenada = data.sort((x,y) => y.nombre.localeCompare(x.nombre));
    table.innerHTML = "";
    table.append(trHead)
    trHead.append(thNombre, thApellido, thEdad, thEmail, thTelefono)
   // mostrarDatos();
});

/**
 * Retornamos una promesa con la lista ordenada.
 * usamos funcion de fleha para resolver el ordenamiento.
 * 
 * @returns Promesa
 */
const ordenarAsce = () => new Promise ( () =>{
    tempNombre = "Asc"
    const listaOrdenada = data.sort((x,y) => x.nombre.localeCompare(y.nombre));
    table.innerHTML = "";
    table.append(trHead)
    trHead.append(thNombre, thApellido, thEdad, thEmail, thTelefono)
   // mostrarDatos();
});

/**
 * Retornamos una promesa con la lista ordenada.
 * usamos funcion de fleha para resolver el ordenamiento.
 * 
 * @returns Promesa
 */
const orderAgeDesc = () => new Promise ( () =>{
    tempEdad = "Des";
    const listaOrdenada = data.sort((x,y) => y.edad.localeCompare(x.edad));
    table.innerHTML = "";
    table.append(trHead);
    trHead.append(thNombre, thApellido, thEdad, thEmail, thTelefono)
    mostrarDatos();
});

/**
 * Retornamos una promesa con la lista ordenada.
 * usamos funcion de fleha para resolver el ordenamiento.
 * 
 * @returns Promesa
 */
const orderAgeAsc = () => new Promise ( () =>{
    tempEdad = "Asc";
    const listaOrdenada = data.sort((x,y) => x.edad.localeCompare(y.edad));
    table.innerHTML = "";
    table.append(trHead);
    trHead.append(thNombre, thApellido, thEdad, thEmail, thTelefono)
    mostrarDatos();
});

/**
 * Mostramos los datos en la tabla del DOM.
 */
function mostrarDatos() {
    // temporal = "Des"
    data.forEach((dato) => {
       // console.log(dato);
        const trCont = document.createElement("tr");
        for (const key in dato) {
            const td = document.createElement("td");
            td.textContent = dato[key];
            trCont.append(td);
        }

        table.append(trCont);

    })
}


