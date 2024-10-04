// Responsive navigation menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');
let sidebar = document.getElementById('sidebar')

menuToggle.addEventListener('click', () => {
    sidebar.style.marginRight = "0px";
});

let sideicon = document.getElementById("side-close__icon").addEventListener("click", () => {
  document.getElementById('sidebar').style.marginRight = "-60%"
});

//Blog Projects

document.getElementById('clickableImage1').addEventListener('click', function() {
  window.location.href = 'https://aasiacoder.github.io/Greenden-Tailwind/'; 
});

document.getElementById('clickableImage2').addEventListener('click', function() {
  window.location.href = 'https://aasiacoder.github.io/Udemy-Clone/'; 
});

document.getElementById('clickableImage3').addEventListener('click', function() {
  window.location.href = 'https://aasiacoder.github.io/Nostra-Website-clone/'; 
});

document.getElementById('clickableImage4').addEventListener('click', function() {
  window.location.href = 'https://aasiacoder.github.io/BookNook/'; 
});

document.getElementById('clickableImage5').addEventListener('click', function() {
  window.location.href = 'https://aasiacoder.github.io/Subscription-Page/'; 
});

document.getElementById('clickableImage6').addEventListener('click', function() {
  window.location.href = 'https://aasiacoder.github.io/Reester/';
});

//Footer Section
document.getElementById('linkedin').addEventListener('click', function(){
  window.location.href = 'https://www.linkedin.com/in/aasia-frontenddeveloper/';
})

document.getElementById('github').addEventListener('click', function(){
  window.location.href = 'https://github.com/Aasiacoder';
})
