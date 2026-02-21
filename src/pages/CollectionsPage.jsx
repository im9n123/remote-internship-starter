import React, { useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CollectionsData from "../components/ui/CollectionsData";
import CollectionsSkeleton from "../components/ui/CollectionsSkeleton";
import { useFetch } from "../components/collection/useCollection";

export default function CollectionsPage() {
  const { handleLoadMore, visibleCount, visible } = useContext(AppContext);
  const { data: collection, loading: loading } = useFetch(
    `/collections/`,
    true,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="collections-page__title">Collections</h1>
        <div className="collections__body">
          {loading ? (
            <CollectionsSkeleton amount={12} />
          ) : (
            collection.slice(0, visibleCount).map((collection) => (
              <div className="collection-column" key={collection.id}>
                <CollectionsData collection={collection} />
              </div>
            ))
          )}
        </div>
        <button
          className={`collections-page__button ${!visible && "invisible"}`}
          onClick={() => handleLoadMore(collection.length)}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
