import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

const CollectionsCardSkeleton = () => {
  return (
    <div className="item-column" style={{ width: "100%" }}>
      <div to={"/item"} className="item">
        <figure className="item__img__wrapper">
          <Skeleton width={"100%"} height={"100%"} />
        </figure>
        <div className="item__details">
          <span className="item__details__name">
            <Skeleton width={"80px"} height={"16px"} borderRadius={"4px"} />
          </span>
          <span className="item__details__price">
            <Skeleton width={"48px"} height={"16px"} borderRadius={"4px"} />
          </span>
          <span className="item__details__last-sale">
            <Skeleton width={"120px"} height={"16px"} borderRadius={"4px"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionsCardSkeleton;
