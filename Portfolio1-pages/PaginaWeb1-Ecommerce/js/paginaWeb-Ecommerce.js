// Puntuar estrellas

let estrellas = document.querySelectorAll(".star");

estrellas.forEach((estrella, indice)=>{
     estrella.onclick = function(){
        let estrellaActual = indice + 1;

        estrellas.forEach((estrella, indice2)=>{
            if(estrellaActual >= indice2 + 1){
            estrella.classList.remove("bi-star");
            estrella.classList.add("bi-star-fill");
         } else{
            estrella.classList.add("bi-star");
            estrella.classList.remove("bi-star-fill");
         }

        });
        
     };
});

let estrellas2 = document.querySelectorAll(".star2");

estrellas2.forEach((estrella, indice) => {
  estrella.onclick = function () {
    let estrellaActual = indice + 1;

    estrellas2.forEach((estrella, indice2) => {
      if (estrellaActual >= indice2 + 1) {
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill");
      } else {
        estrella.classList.add("bi-star");
        estrella.classList.remove("bi-star-fill");
      }
    });
  };
});


let estrellas3 = document.querySelectorAll(".star3");

estrellas3.forEach((estrella, indice) => {
  estrella.onclick = function () {
    let estrellaActual = indice + 1;

    estrellas3.forEach((estrella, indice2) => {
      if (estrellaActual >= indice2 + 1) {
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill");
      } else {
        estrella.classList.add("bi-star");
        estrella.classList.remove("bi-star-fill");
      }
    });
  };
});


let estrellas4 = document.querySelectorAll(".star4");

estrellas4.forEach((estrella, indice) => {
  estrella.onclick = function () {
    let estrellaActual = indice + 1;

    estrellas4.forEach((estrella, indice2) => {
      if (estrellaActual >= indice2 + 1) {
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill");
      } else {
        estrella.classList.add("bi-star");
        estrella.classList.remove("bi-star-fill");
      }
    });
  };
});


let estrellas5 = document.querySelectorAll(".star5");

estrellas5.forEach((estrella, indice) => {
  estrella.onclick = function () {
    let estrellaActual = indice + 1;

    estrellas5.forEach((estrella, indice2) => {
      if (estrellaActual >= indice2 + 1) {
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill");
      } else {
        estrella.classList.add("bi-star");
        estrella.classList.remove("bi-star-fill");
      }
    });
  };
});


let estrellas6 = document.querySelectorAll(".star6");

estrellas6.forEach((estrella, indice) => {
  estrella.onclick = function () {
    let estrellaActual = indice + 1;

    estrellas6.forEach((estrella, indice2) => {
      if (estrellaActual >= indice2 + 1) {
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill");
      } else {
        estrella.classList.add("bi-star");
        estrella.classList.remove("bi-star-fill");
      }
    });
  };
});


let estrellas7 = document.querySelectorAll(".star7");

estrellas7.forEach((estrella, indice) => {
  estrella.onclick = function () {
    let estrellaActual = indice + 1;

    estrellas7.forEach((estrella, indice2) => {
      if (estrellaActual >= indice2 + 1) {
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill");
      } else {
        estrella.classList.add("bi-star");
        estrella.classList.remove("bi-star-fill");
      }
    });
  };
});


let estrellas8 = document.querySelectorAll(".star8");

estrellas8.forEach((estrella, indice) => {
  estrella.onclick = function () {
    let estrellaActual = indice + 1;

    estrellas8.forEach((estrella, indice2) => {
      if (estrellaActual >= indice2 + 1) {
        estrella.classList.remove("bi-star");
        estrella.classList.add("bi-star-fill");
      } else {
        estrella.classList.add("bi-star");
        estrella.classList.remove("bi-star-fill");
      }
    });
  };
});


// ..............

window.addEventListener("load", (e)=>{
     console.log(screenX);
     console.log(screenY);
     console.log(e)
});

