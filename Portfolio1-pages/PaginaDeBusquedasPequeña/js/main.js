const grid = new Muuri(".grid", {
    layout: {
        rounding: false
    }
})
//inicializar el layout


window.addEventListener("load", ()=>{
    grid.refreshItems().layout();
    document.querySelector(".grid").classList.add("agregarEfecto");
})
//aparecer las imagenes al cargar la pagina

const enlaces = document.querySelectorAll("#navegacion a");

enlaces.forEach(elemento => {
     elemento.addEventListener("click", (evento)=>{
          evento.preventDefault();

enlaces.forEach((enlace) => enlace.classList.remove("activo"));
    evento.target.classList.add("activo");

const categoria = evento.target.innerHTML.toLowerCase();
categoria == "todos" ? grid.filter(`[data-valor]`) : grid.filter(`[data-valor="${categoria}"]`);

     });
});
//filtrar por enlaces la busqueda

document.getElementById("busqueda").addEventListener("input", (evento)=>{
       const busqueda = evento.target.value;

    grid.filter((item) => item.getElement().dataset.etiqueta.includes(busqueda));
})
//filtrar por barra de busqueda

const overlay = document.querySelector(".contenedor-overlay");


const galeria = document.querySelectorAll(".grid .item img").forEach(elementoImagen =>{
       elementoImagen.addEventListener("click", (eventoClick)=>{
           const ruta = eventoClick.target.getAttribute("src");
           const descripciones = eventoClick.target.parentNode.parentNode.dataset.descripcion;
           

           overlay.classList.add("agregarEfecto-overlay");
           document.querySelector(".contenedor-overlay img").src= ruta;
           document.querySelector(".descripcion-overlay").innerHTML= descripciones;
          

  })

});
//poner imagen y descripciones en el overlay

const cerrar = document.querySelector(".cerrar-pop");

cerrar.addEventListener("click", (evento)=>{
    overlay.classList.remove("agregarEfecto-overlay");

overlay.addEventListener("click", (evento)=>{
    evento.target.id== "over" ? overlay.classList.remove("agregarEfecto-overlay") : "";
})

});
//cerrar el overlay



