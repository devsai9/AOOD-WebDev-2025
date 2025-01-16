const imageFiles = [
    "/assets/5.3/gc-1.png",
    "/assets/5.3/gc-2.png",
    "/assets/5.3/gc-3.png",
];

document.getElementById("textInput").addEventListener("input", (event) => {
    document.getElementById(
        "dynamicText"
    ).innerText = `You typed: ${event.target.value}`;
});

document.getElementById("colorButton").addEventListener("mousedown", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.getElementById("dynamicText").style.color = randomColor;
});

document.getElementById("randomImage").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    document.getElementById("randomImage").src = imageFiles[randomIndex];
});

document.getElementById("resizeBox").addEventListener("mouseover", () => {
    const randomSize = Math.floor(Math.random() * 200) + 50;
    document.getElementById("resizeBox").style.width = `${randomSize}px`;
    document.getElementById("resizeBox").style.height = `${randomSize}px`;
});

document.getElementById("dropdownMenu").addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const colors = {
        LB: "lightblue",
        LG: "lightgreen",
        LC: "lightcoral",
    };

    document.getElementById("resizeBox").style.backgroundColor =
        colors[selectedValue] || "white";
});
