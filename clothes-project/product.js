const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const input = document.querySelector("input[name='quantity']")

plus.addEventListener("click", () => {
  input.value = parseInt(input.value)
    + 1;
});

minus.addEventListener("click", () => {
  if (input.value > 1) {
    input.value = parseInt(input.value)
      - 1;
  }
});

// 


const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});

// /

document.getElementById("loadMore").onclick = function () {

  const hiddenCards = document.querySelectorAll(".hidden");

  hiddenCards.forEach(function (card) {
    card.classList.remove("hidden");
  });

  this.style.display = "none"; // hide button

};


