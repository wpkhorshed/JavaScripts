"use strict";

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");

// console.log(modal, closeModal, showModal);

const modalOpen = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  
const modalClose = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click",modalOpen );
}


closeModal.addEventListener('click', modalClose);
overlay.addEventListener('click',modalClose);
