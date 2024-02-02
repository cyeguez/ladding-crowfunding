const iconMenu = document.querySelector(".icon-menu"); //Icono de hamburguesa
const nav = document.querySelector(".nav"); //Nav
const iconCloseMenu = document.querySelector(".icon-close-menu"); //icon x del menu
const section3 = document.querySelector(".section3");
const btnsRewards = section3.querySelectorAll("button[type='button']"); // todas las cards de la sección3
const modal = document.querySelector(".modal");
let nameClass;





// funciones encargadas de mostrar el menu mobile
const showMenuMobile = (element) => {
  // funcion encarga de mostra el menu

  element.classList.remove("hidden");
  iconMenu.style.display = "none";
  iconCloseMenu.style.display = "block";
};

iconMenu.addEventListener("click", () => {
  showMenuMobile(nav);
}); // Evento disparador del menu

iconCloseMenu.addEventListener("click", () => {
  nav.classList.add("hidden");  
  iconCloseMenu.style.display = "none";
  iconMenu.style.display = "block";
});


// funciones encaegadas de activar bordes verdes

function paintCard(valueX) {
  console.log(valueX)
  const modalCards= modal.querySelectorAll("div[id]");
 
  
  
  
//   let inputRadio= modal.querySelector("input[type='radio']");
//  console.log(inputRadio)
//    inputRadio.checked= true;
//   let activeInput= card.querySelector(".modal__card__container-buttons");
  
//   card.classList.add("card-selected");
//   activeInput.classList.remove("hidden");
  
}


btnsRewards.forEach((btn) => {
  btn.addEventListener("click",function(e) {

    let nameCard= e.target.classList[1];
    paintCard(nameCard);
  });
});







