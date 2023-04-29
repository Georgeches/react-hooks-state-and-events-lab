import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [filterMethod, setMethod] = useState('')

  let filteredArr;
  if(filterMethod!==''){
    filteredArr = items.filter(item=>item.category===filterMethod)
  }

  else{
    filteredArr = [...items]
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={e=>setMethod(e.target.value)}>
          <option value="">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
