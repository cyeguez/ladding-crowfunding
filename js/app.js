const iconMenu = document.querySelector(".icon-menu"); //Icono de hamburguesa
const nav = document.querySelector(".nav"); //Nav
const iconCloseMenu = document.querySelector(".icon-close-menu"); //icon x del menu
const section3 = document.querySelector(".section3");
const btnsRewards = section3.querySelectorAll("button[type='button']"); // todas las cards de la sección3
const modal = document.querySelector(".modal");
const modalCards= modal.querySelectorAll(".card");
const radios= modal.querySelectorAll("input[type='radio']"); //
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

  let card = modal.querySelector(`#${valueX}`);
  let containerInput = card.querySelector(".modal__card__container-buttons");
  let inputRadio = card.querySelector("input[type='radio']");
  
  
  card.classList.add("card-selected");
  containerInput.classList.remove("hidden");
  inputRadio.checked= true;

}

btnsRewards.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let nameCard = e.target.classList[1];
    paintCard(nameCard);
  });
});

const cardOff= () => {
 modalCards.forEach(card => {
   let containerInput = card.querySelector(".modal__card__container-buttons");
   let inputRadio = card.querySelector("input[type='radio']");
   
   card.classList.remove("card-selected");
   containerInput.classList.add("hidden");
   inputRadio.checked= false;

 });
};


//Agregando los eventos a los inputs radios
radios.forEach(input =>{
  input.addEventListener("click", function(e){
   let padre =(e.target.parentNode);
   let abuelo = padre.parentNode.id
   
    cardOff();
    paintCard(abuelo);
  })
});