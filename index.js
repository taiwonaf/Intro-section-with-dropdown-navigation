const navItems = document.getElementById("nav-items");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    const hampar = hamburger.parentElement;
    hampar.classList.toggle("active");
})