//построенное на событии

const item = document.querySelector(".item");
const placeholderList = document.querySelectorAll(".placeholder");

//событиz  перетаскивания drags start и end
item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);


placeholderList.forEach(placeholder => {
  placeholder.addEventListener("dragover", dragover); //вызывается, когда элемент который перетаскиваем находится над placeholderom
  placeholder.addEventListener("dragenter", dragenter); // когда заходим на территорию placeholder
  placeholder.addEventListener("dragleave", dragleave); // перетащили, но  вышли
  placeholder.addEventListener("drop", dragdrop); // отпусти
});

function dragstart(evt) {
  evt.target.classList.add("hold");
  setTimeout(() => evt.target.classList.add("hide"), 0);
}

function dragend(evt) {
  // evt.target.classList.remove('hold')
  // evt.target.classList.remove('hide')
  evt.target.classList.remove("hold", "hide");
}

function dragover(evt) {
  evt.preventDefault();
}
function dragenter(evt) {
  evt.target.classList.add("hovered");
  console.log("drag enter");
}
function dragleave(evt) {
  evt.target.classList.remove("hovered");
}
function dragdrop(evt) {
  evt.target.classList.remove("hovered");
  evt.target.append(item);
}
