import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItemName, setNewItem] = useState('')
  const [newCategory, setNewCategory] = useState('Produce')

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newCategory,
    }
    onItemFormSubmit(newItem)
    setNewItem('')
    setNewCategory('Produce')
  }

  function handleNewItem(event) {
    setNewItem(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItem} value={newItemName}/>
      </label>

      <label>
        Category:
        <select
        name="category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
