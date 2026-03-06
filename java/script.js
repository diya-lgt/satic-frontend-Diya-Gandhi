
console.log("day1 Task loaded");

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link a');

hamburger.addEventListener('click', () => {
    body.classList.toggle('nav-open');
    body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('nav-open');
        body.classList.remove('no-scroll');
    });
});
const form = document.getElementById("searchForm");
const input = document.getElementById("search");

form.addEventListener("submit", function(event){
  

  event.preventDefault();

  const value = input.value.trim();


  if(value === ""){
    alert("Please enter a search term.");
    return;
  }


  console.log("Searching for:", value);
});





 const toastContainer = document.getElementById("toast-container");
const successBtn = document.getElementById("successBtn");
const errorBtn = document.getElementById("errorBtn");

function createToast(type, message) {

  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  const icon = type === "success" ? "✔" : "⚠";

  toast.innerHTML = `
    <div>
      <strong>${icon}</strong> ${message}
    </div>
    <button>&times;</button>
  `;

  toastContainer.appendChild(toast);


  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

 
  const autoRemove = setTimeout(() => {
    removeToast(toast);
  }, 3000);

 
  toast.querySelector("button").addEventListener("click", () => {
    clearTimeout(autoRemove);
    removeToast(toast);
  });
}

function removeToast(toast) {
  toast.classList.remove("show");
  setTimeout(() => {
    toast.remove();   
  }, 400);
}


successBuntton.addEventListener("click", () => {
  createToast("success", "Success: Project saved!");
});

errorBuntton.addEventListener("click", () => {
  createToast("error", "Error: Failed to fetch data.");
});






const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");



function validateName() {
  const value = nameInput.value.trim();
  if (value.length < 3) {
    nameInput.classList.add("error");
    nameInput.classList.remove("success");
    nameError.classList.add("active");
    return false;
  } else {
    nameInput.classList.remove("error");
    nameInput.classList.add("success");
    nameError.classList.remove("active");
    return true;
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  const isValid = value.includes("@") && value.includes(".");
  
  if (!isValid) {
    emailInput.classList.add("error");
    emailInput.classList.remove("success");
    emailError.classList.add("active");
    return false;
  } else {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
    emailError.classList.remove("active");
    return true;
  }
}

function validateMessage() {
  const value = messageInput.value.trim();
  if (value === "") {
    messageInput.classList.add("error");
    messageInput.classList.remove("success");
    messageError.classList.add("active");
    return false;
  } else {
    messageInput.classList.remove("error");
    messageInput.classList.add("success");
    messageError.classList.remove("active");
    return true;
  }
}


function checkFormValidity() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  submitButton.disabled = !(isNameValid && isEmailValid && isMessageValid);
}


nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
messageInput.addEventListener("input", checkFormValidity);


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
});






const backToTopBtn = document.getElementById("backToTopBtn");

let isVisible = false;

window.addEventListener("scroll", function(){

  if(window.scrollY > 500){

    if(!isVisible){
      backToTopBtn.classList.add("show-btn");
      isVisible = true;
    }

  }else{

    if(isVisible){
      backToTopBtn.classList.remove("show-btn");
      isVisible = false;
    }

  }

});

backToTopBtn.addEventListener("click", function(){

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


