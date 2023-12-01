import React from "react";

export default function ItemsForm({ items, setItems }) {
  const handleItemsInput = (e) => setItems(e.target.value);

  return (
    <main>
      <h1>Randomize Pairs</h1>
      <p>Add text in the input below separated by a new line</p>
      <form className="ItemsForm">
        <label htmlFor="items">Add Items Below:</label>
        <textarea
          onChange={handleItemsInput}
          name="items"
          id="items"
          cols="30"
          rows="10"
          value={items}
        ></textarea>
      </form>
    </main>
  );
}
