import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  let addedObj = {};
  for (const item of items) {
    addedObj[item.id]= false;
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log("added obj in category handler",addedObj)
  }

  function handleAddedState(id) {
    addedObj[id] = !addedObj[id];
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  //console.log("items to display",itemsToDisplay)
  //console.log("isInCart in parent", isInCart)

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          //<Item key={item.id} id={item.id} addedObj={addedObj} name={item.name} category={item.category} handleAddedState={handleAddedState} />
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


