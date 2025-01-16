let menu = document.getElementById("menu");
menu.style.opacity = 0;

let mouseX = 10;
let mouseY = 60;

function showMenu(e) {
    menu.style.opacity = 1;
    menu.classList.remove("hidden");
    menu.style.position = "absolute";
    mouseX = e.clientX;
    mouseY = e.clientY;
    menu.style.left = mouseX + "px";
    menu.style.top = mouseY + "px";
}

function hideMenu() {
    menu.style.left = mouseX + "px";
    menu.style.top = mouseY + "px";
    menu.style.opacity = 0;
    menu.classList.add("hidden");
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    showMenu(e);
});

document.addEventListener("click", (e) => {
    hideMenu();
});
