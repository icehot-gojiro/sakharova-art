document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery .item");
  items.forEach(item => {
    const img = item.querySelector("img");
    const size = 150 + Math.random() * 200; // размер от 150 до 350px
    item.style.width = size + "px";
    item.style.top = Math.random() * 80 + "%";
    item.style.left = Math.random() * 80 + "%";
  });
});
