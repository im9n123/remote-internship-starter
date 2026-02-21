import React from "react";
import Skeleton from "./Skeleton";
import CollectionsCardSkeleton from "./CollectionsCardSkeleton";

const CollectionItemsSkeleton = () => {
  return (
    <section id="collection-items">
      <div className="row collection-items__row">
        <div className="collection-items__header">
          <div className="collection-items__header__left">
            <span className="collection-items__header__live">
              <Skeleton width={"52px"} height={"16px"} borderRadius={"4px"} />
            </span>
            <span className="collection-items__header__results">
              <Skeleton width={"72px"} height={"16px"} borderRadius={"4px"} />
            </span>
          </div>
          <Skeleton width={"240px"} height={"48px"} borderRadius={"8px"} />
        </div>
        <div className="collection-items__body">
          {new Array(12).fill(0).map((_, index) => (
            <CollectionsCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionItemsSkeleton;
