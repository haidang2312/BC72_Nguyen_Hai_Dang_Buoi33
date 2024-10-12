import Item from "./Item";
import React from "react";

export default function List(props) {
  console.log("props:", props);
  let { dataShoe, handleRemoveFromList, handleAddToCart } = props;
  let renderList = () => {
    // image, name,button add
    return dataShoe.map((shoe, index) => {
      return (
        <Item
          key={index}
          shoe={shoe}
          handleRemoveFromList={handleRemoveFromList}
          handleAddToCart={handleAddToCart}
        />
      );
    });
  };
  return <div className="row col-5">{renderList()}</div>;
}
