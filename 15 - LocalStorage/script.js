// get required elements
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault(); // not reaload the page when form is submited
  const text = this.querySelector("[name=item]").value;
  const item = {
    text, //es6 shortcut
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
            <li>
            <input type='checkbox' data-index='${i}' id='item${i}' ${
        plate.done ? "checked" : ""
      }/>
            <label for='item${i}'>${plate.text}</label>
            </li>
        `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const node = e.target;
  const index = node.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);
// when you add an item, you put it into LocalStorage,and you update it every single time, and then when the page loads we check if there's smth
// in localstorage and put it back again in the array;
