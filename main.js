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
    const item = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val(''); //clear text in input box
    // addItemToShoppingList and refresh the display
    addItemToShoppingList(item);
    handleDisplayListItems();
  });
}


function addItemToShoppingList(itemName) {
  store.items.push({ 
    itemName: itemName, 
    checked: false, 
    id: 0,
  });
}

// handle remove item
function handleItemDelete(){
  $('.js-shopping-list').on('click', '.js-shopping-item-delete', function() { // why dsnt .click work?
    let id = parseInt($(this).attr('value')); // why can't i do .on('click', console.log())
    let index = store.items.findIndex(item => item.id === id);
    store.items.splice(index, 1);
    // refresh list items
    handleDisplayListItems();
  });
}


// handle check/un-check item


// handle search


// handle edit item name


// handle display list items
function handleDisplayListItems() {
  if (store.items.length > 0) {
    // clear list html first
    $('.js-shopping-list').empty();
    for (let i = 0; i < store.items.length; i++) {
      let listItem = store.items[i];
      // set item id (for delete/check)
      listItem.id = i;
      $('.js-shopping-list').append(generateListElement(listItem));
    }
  } else{
    $('.js-shopping-list').empty();
  }
}

function generateListElement(listItem) {
  return (`<li>
  <span class="shopping-item ${listItem.checked ? 'shopping-item__checked' : ''}">
  ${listItem.itemName}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete js-shopping-item-delete" value="${listItem.id}">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`);
}

// handle shopping list
function handleShoppingList() {
  handleAddItemSubmit();
  handleDisplayListItems();
  handleItemDelete();
}


// ---- add some items so the list is not blank at start ----
addItemToShoppingList('Strawberries');
addItemToShoppingList('Scallops');
addItemToShoppingList('Milk');

$(handleShoppingList);
