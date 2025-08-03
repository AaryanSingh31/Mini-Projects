let loader = document.querySelector(".loader");
let spinner = document.querySelector(".spinner");
let body = document.querySelector("body");
let btn = document.querySelector(".btn");

// function toggleLoader() {
//     loader.classList.toggle("change-color-loader");
//     spinner.classList.toggle("change-color");
//     body.classList.toggle("change-color");
//}
btn.addEventListener("click", () => {
    loader.classList.toggle("change-loader-color");
    spinner.classList.toggle("change-color");
    body.classList.toggle("change-color");
    btn.classList.toggle("btn-animate");
}
);
