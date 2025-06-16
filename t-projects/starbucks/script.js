const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector('.ocfe'); // Fixed class selector
const pcfe = document.querySelector('.pcfe'); // Fixed class selector

const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

if (gcfe) {
    gcfe.addEventListener("click", () => {
        green.style.opacity = "1";
        green.style.transform = "rotate(0deg)";
        pink.style.opacity = "0";
        pink.style.transform = "rotate(-90deg)";
        orange.style.opacity = "0";
        orange.style.transform = "rotate(-90deg)";
    });
}

if (ocfe) {
    ocfe.addEventListener("click", () => {
        green.style.opacity = "0";
        green.style.transform = "rotate(0deg)";
        pink.style.opacity = "0";
        pink.style.transform = "rotate(-90deg)";
        orange.style.opacity = "1";
        orange.style.transform = "rotate(0deg)"; // Fixed rotation
    });
}

if (pcfe) {
    pcfe.addEventListener("click", () => {
        green.style.opacity = "0";
        green.style.transform = "rotate(0deg)";
        pink.style.opacity = "1";
        pink.style.transform = "rotate(0deg)"; // Fixed rotation
        orange.style.opacity = "0";
        orange.style.transform = "rotate(-90deg)";
    });
}
