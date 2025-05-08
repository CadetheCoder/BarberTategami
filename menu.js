// Menu Page
if(document.body.classList.contains("menu-page")){
    const courseBtns = document.querySelectorAll(".course-btn");
    courseBtns.forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "booking.html";
        })
    })
}