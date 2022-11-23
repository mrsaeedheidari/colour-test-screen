const colors = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "antiquewhite",
];

function setColor(color) {
    document.body.style.backgroundColor = color;
    document.querySelector("#current-color").innerHTML = color.toUpperCase();
    const currentActiveButton= document.querySelector('button.active')
    if (currentActiveButton !== null){
        currentActiveButton.classList.remove('active')
    }
    document.querySelector(`button[data-color=${color}]`).classList.add('active')

}

colors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.setAttribute('data-color', color)
    const btnBorderColor = button.style.borderColor;
    button.addEventListener("mouseover", (ev) => {
        setColor(color);

    });

    document.querySelector(".colors").appendChild(button);
});
document.body.onload = function () {
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randColor);
};


