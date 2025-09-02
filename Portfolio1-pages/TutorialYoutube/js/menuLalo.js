const hamburguesita = document.querySelector(".hamburguesita");
const menu = document.querySelector(".menu-navegacion");


hamburguesita.addEventListener("click", ()=>{
        menu.classList.toggle("aparecer");
});

window.addEventListener("click", e=>{
    if (menu.classList.contains("aparecer") && e.target!= hamburguesita && e.target!= menu){
        menu.classList.toggle("aparecer");
    }
});
//desplegar menu

const imagenes = document.querySelectorAll(".img-galeria1");
const displayer = document.querySelector(".imagenAmpliada-contenedor");

imagenes.forEach(imagen => {
    imagen.addEventListener("click", ()=>{
        displayer.classList.add("agregarDisplay");
    });
});

// agregar el display al clickear la imagen



const cerrarVentana = document.getElementById("close");

cerrarVentana.addEventListener("click", ()=>{
        displayer.classList.remove("agregarDisplay");
    });

    displayer.addEventListener("click", (e)=>{
        e.target == displayer ? displayer.classList.remove("agregarDisplay") : "";
});
//cerrar el displayer


