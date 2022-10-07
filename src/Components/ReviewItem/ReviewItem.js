import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemove }) => {
  const {id, img, name, price, quantity , shipping} = product;
  return (
    <div className="review-item">
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <div className="item-details">
        <div className="item-info">
          <p>{name}</p>
          <p>
            <small>price: ${price}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div >
          <button className="delete-btn" onClick={()=> handleRemove(id)}>
            <FontAwesomeIcon icon={faTrashAlt} className='delete-icon'></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
