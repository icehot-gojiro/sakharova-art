document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    const colStart = Math.floor(Math.random() * 10) + 1;
    const colSpan = Math.floor(Math.random() * 3) + 2;
    const rowStart = Math.floor(Math.random() * 5) + 1;
    const rowSpan = Math.floor(Math.random() * 2) + 2;
    img.style.gridColumn = `${colStart} / span ${colSpan}`;
    img.style.gridRow = `${rowStart} / span ${rowSpan}`;
  });
});