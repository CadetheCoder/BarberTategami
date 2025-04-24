const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const pageContent = document.querySelector(".page-content");

// Hamburger Menu
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active"); 
    pageContent.classList.toggle('menu-open');
});