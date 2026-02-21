import React from "react";
import Skeleton from "./Skeleton";

export default function CollectionInfoSkeleton() {
  return (
    <section id="collection-info">
      <div className="row">
        <div className="collection-info__wrapper">
          <div className="collection-info__description">
            <Skeleton width={"100%"} height={"16px"} borderRadius={"4px"} />
            <Skeleton width={"100%"} height={"16px"} borderRadius={"4px"} />
            <Skeleton width={"70%"} height={"16px"} borderRadius={"4px"} />
          </div>
          <div className="collection-info__details">
            <span className="collection-info__detail">
              <Skeleton width={"58px"} height={"16px"} borderRadius={"4px"} />
              <span className="collection-info__detail__data"></span>
            </span>

            <span className="collection-info__detail">
              <Skeleton width={"120px"} height={"16px"} borderRadius={"4px"} />
              <span className="collection-info__detail__data"></span>
            </span>

            <span className="collection-info__detail">
              <Skeleton width={"132px"} height={"16px"} borderRadius={"4px"} />
              <span className="collection-info__detail__data"></span>
            </span>

            <span className="collection-info__detail">
              <Skeleton width={"108px"} height={"16px"} borderRadius={"4px"} />
              <span className="collection-info__detail__data"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
