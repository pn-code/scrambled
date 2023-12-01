import { useState } from "react";
import ItemsForm from "./components/ItemsForm";
import ItemsList from "./components/ItemsList";
import "./App.css";

function App() {
  const [itemsText, setItemsText] = useState("");

  return (
    <>
      <ItemsForm items={itemsText} setItems={setItemsText} />
      <ItemsList itemsText={itemsText} />
    </>
  );
}

export default App;
