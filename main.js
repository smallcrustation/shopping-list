'use strict';

// declare store var that will keep array and bool to hideCompleted
const store = {
  items: [],
  hideCompleted: false,
};

// handle add item
function handleAddItemSubmit() {
  $('#js-shopping-list-form').submit((e) => {
    e.preventDefault(); // prevent default html submit action
    // get the item name fro the form
    const item = $('#shopping-list-entry').val();
    // addItemToShoppingList
    addItemToShoppingList(item);
  });
}


function addItemToShoppingList(itemName) {
  store.items.push({ name: itemName, checked: false });
}

// handle remove item


// handle check/un-check item


// handle search


// handle edit item name


// handle display list items
function handleDisplayListItems() {
  console.log(store.items.length);
  if (store.items.length > 0) {
    for (let i = 0; i < store.items.length; i++) {
      let tempItem = store.items[i].itemName;
      $('.shopping-list').after(`<li>
      <span class="shopping-item">${tempItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
    }
  }
}

// handle shopping list
function handleShoppingList() {
  handleAddItemSubmit();
  handleDisplayListItems();
}


// ---- add some items so the list is not blank at start ----
addItemToShoppingList('Strawberries');
addItemToShoppingList('Scallops');
addItemToShoppingList('Milk');

$(handleShoppingList);
