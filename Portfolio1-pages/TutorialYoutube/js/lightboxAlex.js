const imagenes = document.querySelectorAll(".img-galeria");
const contenedorLight = document.querySelector(".imagen-light");
const imagenLight = document.querySelector(".agregar-imagen");
const hamburguer1 = document.querySelector(".hamburguer");


imagenes.forEach(imagen => {
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute("src"));
    })
});


contenedorLight.addEventListener("click", (e)=>{
      if(e.target!= imagenLight){
        contenedorLight.classList.toggle("show");
        imagenLight.classList.toggle("showimage");
        hamburguer1.style.opacity = 1;
      }
})

function aparecerImagen(imagen){
    imagenLight.src = imagen;
    contenedorLight.classList.toggle("show");
    imagenLight.classList.toggle("showimage");
    hamburguer1.style.opacity = 0;
}

