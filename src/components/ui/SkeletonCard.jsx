import React from "react";
import Skeleton from "./Skeleton";

const SkeletonCard = () => {
  return (
    <div to="/collection" className="collection" style={{ width: "100%" }}>
      <Skeleton width={"100%"} height={"180px"} />
      <div className="collection__info">
        <h3 className="collection__name"></h3>
        <div className="collection__stats">
          <div className="collection__stat">
            <span className="collection__stat__label">
              <Skeleton width={"48px"} height={"16px"} borderRadius={"4px"} />
            </span>
            <span className="collection__stat__data">
              <Skeleton width={"80%"} height={"16px"} borderRadius={"4px"} />
            </span>
          </div>
          <div className="collection__stat">
            <span className="collection__stat__label">
              <Skeleton width={"48px"} height={"16px"} borderRadius={"4px"} />
            </span>
            <span className="collection__stat__data">
              <Skeleton width={"80%"} height={"16px"} borderRadius={"4px"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
