const range = document.getElementById("priceRange");
const output = document.getElementById("priceValue");

range.addEventListener("input", () => {
  output.textContent = range.value;
});

const button = document.querySelector(".toggle-btn");
const content = document.querySelector(".filter-content");

button.addEventListener("click", () => {
  content.classList.toggle("show");
  button.classList.toggle("active");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});


