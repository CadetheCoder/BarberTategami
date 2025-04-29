const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const pageContent = document.querySelector(".page-content");

// Hamburger Menu
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active"); 
    pageContent.classList.toggle('menu-open');
});

const reviewsGallery = document.getElementById("reviews-gallery");
const backBtn = document.getElementById("back-btn");
const forwardBtn = document.getElementById("forward-btn");


forwardBtn.addEventListener("click", () => {
    reviewsGallery.style.scrollBehavior = "smooth";
    reviewsGallery.scrollLeft += 1440;
})

backBtn.addEventListener("click", () => {
    reviewsGallery.style.scrollBehavior = "smooth";
    reviewsGallery.scrollLeft -= 1440;
})