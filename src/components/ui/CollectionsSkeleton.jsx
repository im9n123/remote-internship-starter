import React from "react";
import SkeletonCard from "./SkeletonCard";

const CollectionsSkeleton = ({ amount }) => {
  return (
    <>
      {new Array(amount).fill(0).map((_, index) => (
        <div className="collection-column" key={index}>
          <SkeletonCard />
        </div>
      ))}
    </>
  );
};

export default CollectionsSkeleton;
