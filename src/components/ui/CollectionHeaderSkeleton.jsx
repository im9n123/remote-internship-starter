import React from "react";
import Skeleton from "./Skeleton";

const CollectionHeaderSkeleton = () => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.2)), 
                url()`,
      }}
      id="collection-header"
    >
      <Skeleton width={"100%"} height={"100%"} />
    </header>
  );
};

export default CollectionHeaderSkeleton;
