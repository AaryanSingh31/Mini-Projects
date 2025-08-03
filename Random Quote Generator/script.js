let quote = document.querySelector("#quote");
let button = document.querySelector("#gn-btn");
let clickSound = document.querySelector("#click-sound");
let loader = document.querySelector(".loader-cont");
quote.classList.add("quoteP");
loader.classList.add("loader-cont-visibility");
async function getQuotes(){
   showLoader();
  quote.classList.add("quote-hidden");
   let response = await fetch("https://api.adviceslip.com/advice");
   let data = await response.json();
document.querySelector("#quote").innerText = data.slip.advice;
quote.classList.remove("quoteP");
quote.classList.remove("quote-hidden");
hideLoader();
}

button.addEventListener("click", ()=>{
   console.log("data fetching..")
   getQuotes();
   //clickSound.play();
});

function showLoader(){
   loader.classList.remove("loader-cont-visibility");
}
   function hideLoader() {
  loader.classList.add("loader-cont-visibility");
  }
