
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
