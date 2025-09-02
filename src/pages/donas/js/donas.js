let d = document;

export function showBoxes(boxContent) {
  // const $contentInfoBox = d.createElement('div');
  //       $contentInfoBox.innerHTML =`  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
  //                                     blanditiis delectus! Placeat ducimus nobis voluptatem.</p> `;

  d.addEventListener("click", (e) => {
    if (e.target.matches(boxContent)) {
      //e.target.appendChild($contentInfoBox);
      e.target.children[2].classList.toggle("animate");
      e.target.classList.toggle("boxShow");
      e.target.classList.toggle("bgColor");
      e.target.children[0].classList.toggle("rotateCross");
    }
  });
}

export function links(...link) {
  d.addEventListener("click", (e) => {
    link.forEach(enlace => {
       if (e.target.matches(enlace)) {
           e.target.children[0].classList.toggle("bar");
       }
 
    });
   
  });
}

export function menuHamburguer(hamburguer, menuMobile) {
  
  const $mobile = d.querySelector(menuMobile);
  

  d.addEventListener("click", (e) => {
    if (e.target.matches(hamburguer)) {
        $mobile.classList.toggle("showMenu");
    }
  });
}