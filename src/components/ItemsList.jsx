import React, { useState } from "react";
import randomizeList from "../helpers/randomizeList";
import pairItems from "../helpers/pairItems";

export default function ItemsList({ itemsText }) {
  const items = itemsText != "" ? itemsText.split("\n") : [];
  const [randomPairs, setRandomPairs] = useState([]);

  const generateRandomPairs = () => {
    const randomItems = randomizeList(items);
    const pairedItems = pairItems(randomItems);

    setRandomPairs(pairedItems);
  };

  const PairedItemCard = ({ itemOne, itemTwo }) => {
    if (itemOne && itemTwo) {
      return (
        <li className="list_text">
          <span className="list_item_name">{itemOne}</span> is paired with{" "}
          <span className="list_item_name">{itemTwo}</span>
        </li>
      );
    } else {
      return (
      <li className="warning list_text">
        <span className="list_item_name">{itemOne}</span> is the odd one out!
      </li>)
    }
  };

  return (
    <>
      <button type="button" onClick={generateRandomPairs}>
        Random Pairs
      </button>
      {randomPairs.length > 0 && (
        <ul>
          {randomPairs.map((pair) => (
            <PairedItemCard key={pair[0]} itemOne={pair[0]} itemTwo={pair[1]} />
          ))}
        </ul>
      )}
    </>
  );
}
