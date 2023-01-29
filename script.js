const subBtn = document.querySelector("button");
const states = document.querySelectorAll("ul li");
const state =  document.querySelector("li");
// const statesArr = Array.from(states);
const container = document.querySelector(".container");
const container2 = document.querySelector(".container-2")
const thank_message = document.querySelector("span");


states.forEach((state) => {
    state.addEventListener("click", function() {
        // console.log(state);
    thank_message.innerHTML = state.innerHTML;
    })
})


subBtn.onclick = function () {
    container.style.display = "none";
    container2.style.display = "block";
}
