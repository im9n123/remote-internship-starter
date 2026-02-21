import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const ItemsData = ({ item }) => {
  return (
    <Link to={`/item/${item.itemId}`} className="item">
      <figure className="item__img__wrapper">
        <img src={item.imageLink} alt="" className="item__img" />
      </figure>
      <div className="item__details">
        <span className="item__details__name">{item.title}</span>
        <span className="item__details__price">{item.price} ETH</span>
        <span className="item__details__last-sale">
          Last sale: {item.lastSale} ETH
        </span>
      </div>
      <div className="item__see-more">
        <button className="item__see-more__button">See More</button>
        <div className="item__see-more__icon">
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
      </div>
    </Link>
  );
};

export default ItemsData;
