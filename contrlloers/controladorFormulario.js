//scope de las variables de JS

// almacenando una etiqueta html en una variable en js
//hago eso para poder controlar esa etiqueta desde la logica de js

let boxIdProduct=document.getElementById('id')
let boxNameProduct=document.getElementById('name')
let boxPriceProduct=document.getElementById('price')
let boxDescProduct=document.getElementById('desc')
let boxphotoProduct=document.getElementById('photo')
let boxReviewProduct=document.getElementById('review')
let boxBranProduct=document.getElementById('brand')
let boxSubmitProduct=document.getElementById('botonForm')

//Como detecto un evento en JS
//1una vez tenga una variable que almacena la eiqueta sobre la cual quiero escuchar el evento
//2 utilizar la funcion o metodo propio de JS (watch dog)
boxSubmitProduct.addEventListener("click",function(evento){
    evento.preventDefault()
    //logica que deseo activar si el evento se detecto con exitos
    console.log("acaban de darle click al formularoio")

    //como capturar el valor de un input de un formulario?
    //let id = boxIdProduct.value 
    let name = boxNameProduct.value 
    let price = boxPriceProduct.value 
    let desc = boxDescProduct.value 
    let photo = boxphotoProduct.value 
    let review = boxReviewProduct.value 
    let brand = boxBranProduct.value
    //let botonForm = boxSubmitProduct.value 

    // mostrando los valores capturados
    console.log(name,price,desc,photo,review,brand)
})