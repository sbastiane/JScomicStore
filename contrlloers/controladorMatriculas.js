// DEFINIENDO 5 ESTUDIANTES PARA MATRICULAS EN GLOBANT

let estudianteUno={
    id:1,
    nombre:"Catalina Perez",
    edad:30,
    pagoContado:false,
    cuotasPendientes:15,
    saldoDeuda:3000000
}

let estudianteDos={
    id:2,
    nombre:"Jaime Montoya",
    edad:18,
    pagoContado:false,
    cuotasPendientes:15,
    saldoDeuda:3000000
}

let estudianteTres={
    id:3,
    nombre:"Dayana Meza",
    edad:25,
    pagoContado:true,
    cuotasPendientes:0,
    saldoDeuda:0
}

let estudianteCuatro={
    id:4,
    nombre:"Oscar Leon",
    edad:20,
    pagoContado:false,
    cuotasPendientes:5,
    saldoDeuda:100000000
}

let estudianteCinco={
    id:5,
    nombre:"Ruben Blades",
    edad:33,
    pagoContado:false,
    cuotasPendientes:10,
    saldoDeuda:2000000
}

let estudiantes=[estudianteUno,estudianteDos,estudianteTres,estudianteCuatro,estudianteCinco]
let estudiantesPOO=Array(estudianteUno,estudianteDos,estudianteTres,estudianteCuatro,estudianteCinco)

console.log(estudiantes)
console.log(estudiantesPOO)

//cambiando el texto de cualquier etiqueta
//1.tener la referencia a la etiqueta

//2.utilizo la propiedad textContent para iterar el cotenidpo del texto


//recorriendo un arreglo 
//estudiantes.forEach(function(estudiante){
 //   console.log(estudiantes)
//})

//GENERANO CONTENIDO CONJS
//1. tener un arreglo de datos
//2. referencia a la base o componente padre 
let fila=document.getElementById("fila")

//3.recorro el arreglo de datos y comienzo a generar etiquetas 
//desde javascript (traversing)

estudiantes.forEach(function(estudiante){
    //que queres crear 
    //solo puedo crear etiquetas reales de html
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta =document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let nombreEstudiante=document.createElement("h3")
    nombreEstudiante.classList.add("text-center")
    nombreEstudiante.textContent=estudiante.nombre

    //ensayo
    let edadEstudiante = document.createElement("h3");
    edadEstudiante.textContent = "Edad: " + estudiante.edad;

    let pagoContado = document.createElement("h3");
    pagoContado.textContent = "Pago al contado: " + (estudiante.pagoContado ? "Sí" : "No");

    let cuotasPendientes = document.createElement("h3");
    cuotasPendientes.textContent = "Cuotas Pendientes: " + estudiante.cuotasPendientes;

    let saldoDeuda = document.createElement("h3");
    saldoDeuda.textContent = "Saldo de Deuda: " + estudiante.saldoDeuda;

    let foto=document.createElement("img")
    foto.classList.add("img-fluid")
    foto.src="./index/img/img_est.png"

    
    
    //fin ensayo

    //asocio los elementos creados al componente padre
    tarjeta.appendChild(nombreEstudiante)
    tarjeta.appendChild(foto)
    tarjeta.appendChild(edadEstudiante);
    tarjeta.appendChild(pagoContado);
    tarjeta.appendChild(cuotasPendientes);
    tarjeta.appendChild(saldoDeuda);

    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})