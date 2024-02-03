import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterByCategory, setFilterByCategory] = useState("All");

  const handleFilterChange = (click) => {
    setFilterByCategory(click.target.value);
  };

  const filteredItems = items.filter((item) => {
    if (filterByCategory === "All") {
      return true;
    } else {
      return item.category === filterByCategory;
    }
  });

  /*return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );*/

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange} value={filterByCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
