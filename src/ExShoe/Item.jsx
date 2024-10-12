import React from "react";

export default function Item({
  shoe,
  index,
  handleRemoveFromList,
  handleAddToCart,
}) {
  return (
    <div key={index} className="col-3">
      <img className="w-100" src={shoe.image} />
      <p>{shoe.name}</p>
      <p>${shoe.price}</p>
      <button
        onClick={() => {
          handleRemoveFromList(shoe.id);
        }}
        className="btn btn-dark"
      >
        Delete
      </button>
      <button
        onClick={() => {
          handleAddToCart(shoe);
        }}
        className="btn btn-danger"
      >
        Add
      </button>
    </div>
  );
}
