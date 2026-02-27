
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
