const menuButton = document.getElementById("menu-button")
const mobileMenu = document.getElementById("mobile-menu")

menuButton.addEventListener("click", function(){
    mobileMenu.classList.toggle("active")
    document.body.classList.toggle("menu-open")
});

mobileMenu.addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
    }
});

document.addEventListener("click", function(event) {
    if (
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
    }
});
