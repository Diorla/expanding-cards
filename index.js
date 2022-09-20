// @ts-check
const allItems = document.querySelectorAll(".item");

allItems.forEach((clickedItem) => {
  clickedItem.addEventListener("click", () => {
    allItems.forEach((item) => {
      if (clickedItem !== item) item.classList.remove("expand");
    });
    clickedItem.classList.add("expand");
  });
});
