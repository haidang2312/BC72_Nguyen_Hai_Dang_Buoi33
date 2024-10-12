import { Button, Popconfirm } from "antd";
import React from "react";

export default function Cart({
  dataCart,
  handleRemoveFromCart,
  handleChangeTotal,
}) {
  let renderTbody = () => {
    return dataCart.map((item) => {
      return (
        <tr key={item.id} className="fw-bold">
          <td>{item.name}</td>
          <td>
            <img src={item.image} width="100" />
          </td>
          <td>{item.price}</td>
          <td>
            {
              // nếu total là 1 thì render button xoá
              item.total == 1 ? (
                <Popconfirm
                  title="Delete this shoe?"
                  onConfirm={() => {
                    handleRemoveFromCart(item.id);
                  }}
                  okText="Yes"
                >
                  <Button type="primary">-</Button>
                </Popconfirm>
              ) : (
                <button
                  onClick={() => {
                    handleChangeTotal(item.id, -1);
                  }}
                  className="btn btn-primary"
                >
                  -
                </button>
              )
            }

            <span className="mx-5">{item.total}</span>
            <button
              onClick={() => {
                handleChangeTotal(item.id, 1);
              }}
              className="btn btn-primary"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleRemoveFromCart(item.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="col-7">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            {/* Image	Price	Total	Action */}
            <th>Image</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTbody()}</tbody>
      </table>
    </div>
  );
}
