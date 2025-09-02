

// palindromo
// function invertido(frase){

//        let invertir = "";

//        for(letra of frase){
//            invertir = letra + invertir;

//        }

//        return (invertir == frase);
      
// }


// console.log(invertido("reconocer"));


//palindromo 2

// function palindromo(frase){
//       let alRevez= frase.split("").reverse().join("");

//       console.log(alRevez);

//       return (alRevez === frase);
// }


// console.log(palindromo("reconocer"));


//buscar palabra en un texto y contar el numero de veces
// function enunciado(texto, buscar){
//        const texto_limpio = texto.replace(/[,.!?¿¡-]/gi, "");
//        resultado = 0;


//        if(texto_limpio.includes(buscar)){

//            let textoSeparado = texto_limpio.split(" ");

//         let mapa = {};

//         for(let palabra of textoSeparado){
              
//             if(mapa[palabra]){
//                 mapa[palabra]++;

//             }else{
//                 mapa[palabra] = 1;
//             }
//         }
     
//         resultado = mapa[buscar];
            
//        } 
       
//        else{
//            resultado = 0;
//        }

// return resultado;

// }


// console.log(enunciado("estaba la rana y yo debajo del mar y el agua, jejeje nos reimos mucho por muchas muchas horas, eso si fue mucho tiempo para muchas ranas y la rana se aburrio y durmio.", "y"));

// function lado(numero){

//     let lado_uno = "";

//     for(let i=0; i<numero; i++){
//          lado_uno += "*"; 
//     }

//     return lado_uno;


// }

// function cuadrado(numero){
    
//        let dibujo = lado(numero) + "\n";
//        let contenido = "";

//       for(let i =2; i<numero; i++){
//             contenido = "*";

//             for(let j=2; j<numero; j++){
//                   contenido += " "; 
//             }

//         contenido += "*";

//       dibujo += contenido + "\n";

//       }


//       dibujo += lado(numero);

//       return dibujo;
    
// }

// console.log(cuadrado(4));


// const animal = {
//     nombre: "coby",
//     apellido: "diecinueve",
//     ladrar(){
//         console.log("guauu guauu");
//     }
// }

// const animal2 = {
//     nombre: "pillo",
//     apellido: "dieciocho",
//     ladrar(){
//         console.log("guauu guauu");
//     }
// }

// console.log(animal);
// console.log(animal2);


// console.log("con funcion constructora");



//funcion rancia
// function Animal(nombre,apellido){
//    this.nombre = nombre;
//    this.apellido = apellido;

//    this.ladrar = function(){
//        console.log("guauu guauu");
//    }

//    this.saludar = function(){
//        console.log("hola");
//    }
// }

// const coby = new Animal("coby", "diecinueve"),
//     pillo = new Animal("pillo", "dieciocho");

// console.log(coby);
// console.log(pillo)


// prototipos javascript
//  function Animal(nombre,apellido){
//      this.nombre = nombre;
//      this.apellido = apellido;
//   }

//  Animal.prototype.ladrar = function(){
//      console.log(`guauu guauu ${this.nombre}`);
//  }
//  Animal.prototype.saludar = function(){
//      console.log(`hola soy ${this.nombre}`);
//  }

//  console.log("------------------------------------------------");

//  //herencia prototypica
//  function perro(nombre,apellido,tamanio){
//       this.tamanio = tamanio;
//       this.super = Animal;
//       this.super(nombre,apellido);
//  }

//  //perro hereda de animal
//  perro.prototype = new Animal();
//  perro.prototype.constructor = perro;

//  //sobreescritura de metodos del prototipo padre en el hijo
//  perro.prototype.ladrar = function(){
//     console.log(`soy un perro y mi sonido es ladrar`);
// }

// //metodo propio del perro
// perro.prototype.excavar = function(){
//     console.log(`soy un perro y excavo`);
// }



//  const coby = new perro("coby", "diecinueve", "grande"),
//  pillo = new Animal("pillo", "dieciocho");
 
  
//  console.log(coby);
//  console.log(pillo);


// coby.ladrar(); //funcion sobreescrita
// coby.saludar();
// coby.excavar();

// pillo.ladrar(); // fncion original
// pillo.saludar();

// console.log(Date());

// let fecha = new Date();

// console.log(fecha);

// console.log(fecha.getDate());
// console.log(fecha.getUTCDate());
// console.log(fecha.getUTCHours());
// console.log(fecha.getUTCMinutes());
// console.log(fecha.getUTCSeconds());
// console.log(fecha.getTimezoneOffset());
// console.log(Date());

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------



const foto = document.querySelector(".header__imagen");
const menu = document.querySelector(".informacionPerfil");

foto.addEventListener("click", (e)=>{
   menu.classList.toggle("desplegar");

});


window.addEventListener("click", (e)=>{
 
    if(menu.classList.contains("desplegar") && e.target !=interruptor && e.target !=foto){
     menu.classList.toggle("desplegar");
  }
 
 });


 const interruptor = document.querySelector(".informacionPerfil__interruptorDarkMode");
 const boton = document.querySelector(".informacionPerfil__btn");

 interruptor.addEventListener("click", ()=>{
      document.body.classList.toggle("dark");
      interruptor.classList.toggle("activo");
      boton.classList.toggle("cambio");

      
 //guardar el modo oscuro en el localStorage

      if(document.body.classList.contains("dark")){
         localStorage.setItem("dark-Modo", "true");
       } else{
          localStorage.setItem("dark-Modo", "false");
       }
       



 });

         //guardar el modo oscuro al recargar la pagina del

if(localStorage.getItem("dark-Modo")=="true"){

   document.body.classList.add("dark");
   interruptor.classList.add("activo");
   boton.classList.add("cambio");
 } else {
      document.body.classList.remove("dark");
      interruptor.classList.remove("activo");
      boton.classList.remove("cambio");
   }


//Practicas 27 agosto 2021
