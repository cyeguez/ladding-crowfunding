const iconMenu = document.querySelector(".icon-menu"); //Icono de hamburguesa
const nav = document.querySelector(".nav"); //Nav
const iconCloseMenu = document.querySelector(".icon-close-menu"); //icon x del menu
const containerBookmark = document.querySelector(".section1__container-buttons__bookmark"); //container del bookmark en la section 1
const section3 = document.querySelector(".section3");// section 3
const btnProject = document.getElementById("project");
const btnsRewards = section3.querySelectorAll("button[type='button']"); // todas las cards de la sección3
const modal = document.querySelector(".modal");
const modalCards = modal.querySelectorAll(".card");
const closeModal = document.querySelector(".icon-close-modal");
const radios = modal.querySelectorAll("input[type='radio']"); //
const modalSuccess = document.getElementById("modalSuccess");
let nameClass;


// funciones encargadas de mostrar el menu mobile
const showMenuMobile = (element) => {
  // funcion encarga de mostra el menu

  element.classList.remove("hidden");
  iconMenu.style.display = "none";
  iconCloseMenu.style.display = "block";
};

// Evento disparador del menu
iconMenu.addEventListener("click", () => {
  showMenuMobile(nav);
}); 

//

iconCloseMenu.addEventListener("click", () => {
  nav.classList.add("hidden");
  iconCloseMenu.style.display = "none";
  iconMenu.style.display = "block";
});


// funciones encargadas de activar bordes verdes y seleccionar el input radio de la opción seleccioanada

function paintCard(valueX) {
  let card = modal.querySelector(`#${valueX}`);
  let containerInput = card.querySelector(".modal__card__container-buttons");
  let inputRadio = card.querySelector("input[type='radio']");
  let btnInput = containerInput.querySelector("button[type='button']");
  let inputNum = containerInput.querySelector("input[type='number']");  validationSuccess(btnInput, inputNum);

  card.classList.add("card-selected");
  containerInput.classList.remove("hidden");
  inputRadio.checked = true;
}

//colocandole eventos a los botones reward
btnsRewards.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let nameCard = e.target.classList[1];
    modal.classList.remove("hidden");
    paintCard(nameCard);
  });
});

// función encarga de quitar los border verdes y deseleccionar los input tipo radio
const cardOff = () => {
  modalCards.forEach((card) => {
    let containerInput = card.querySelector(".modal__card__container-buttons");
    let inputRadio = card.querySelector("input[type='radio']");

    card.classList.remove("card-selected");
    containerInput.classList.add("hidden");
    inputRadio.checked = false;
  });
};

//Agregando los eventos a los inputs radios
radios.forEach((input) => {
  input.addEventListener("click", function (e) {
    let padre = e.target.parentNode;
    let abuelo = padre.parentNode.id;

    cardOff();
    paintCard(abuelo);
  });
});


// función encargada de validar y lanzar el modal success
function validationSuccess(btn, input) {
  input.addEventListener("change", function (e) {
    let valueInput = e.target.value;
    btn.addEventListener("click", function () {
      if (valueInput >= input.min) {
        modal.classList.add("hidden");
        modalSuccess.classList.remove("hidden");
      }
    });
  });
}

//función encarga de escuchar el evento clik el contenedor del bookmar, cambiar los colores del svg y mostrar el ed en el texto
containerBookmark.addEventListener("click", function(){
  let bookmark = containerBookmark.querySelector('svg');
  let fill= bookmark.querySelector('.icon-bookmark__circle');
  let path = bookmark.querySelector('.icon-bookmark__path');
  let text = containerBookmark.querySelector('.bookmark__text');
  let span = containerBookmark.querySelector('.bookmark__text--active');  
 
  fill.setAttribute('fill', 'hsl(176, 72%, 28%)');
  path.setAttribute('fill', 'hsl(0, 0%, 100%)');
  text.style.color= 'hsl(176, 72%, 28%)';
  span.style.display= 'inline';
  
});

// evento del botón project el cual lanza al modal
btnProject.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

// evento del icono de close en el modal, el cual cierra el modal.
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});