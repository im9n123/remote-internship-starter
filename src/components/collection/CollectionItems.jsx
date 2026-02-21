import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CollectionItemsSkeleton from "../ui/CollectionItemsSkeleton";
import { useFetch } from "./useCollection";
import ItemsData from "../ui/ItemsData";

export default function CollectionItems() {
  const { id } = useParams();
  const {
    data: collection,
    loading,
    setData: setCollection,
  } = useFetch(`/collection/${id}`, true);
  const { handleLoadMore, visibleCount, visible } = useContext(AppContext);
  const [sort, setSort] = useState("DEFAULT");

  function sortCollection() {
    if (sort === "HIGH_TO_LOW") {
      setCollection({
        ...collection,
        items: collection.items.slice().sort((a, b) => b.price - a.price),
      });
    } else if (sort === "LOW_TO_HIGH") {
      setCollection({
        ...collection,
        items: collection.items.slice().sort((a, b) => a.price - b.price),
      });
    }
  }

  useMemo(() => {
    sortCollection();
  }, [sort]);

  return (
    <>
      {loading ? (
        <CollectionItemsSkeleton />
      ) : (
        <section id="collection-items">
          <div className="row collection-items__row">
            <div className="collection-items__header">
              <div className="collection-items__header__left">
                <span className="collection-items__header__live">
                  <div className="green-pulse"></div>
                  Live
                </span>
                <span className="collection-items__header__results">
                  {collection.items.length} results
                </span>
              </div>
              <select
                value={sort}
                className="collection-items__header__sort"
                onChange={(event) => setSort(event.target.value)}
              >
                <option value="DEFAULT" default disabled>
                  Default
                </option>
                <option value="HIGH_TO_LOW">Price high to low</option>
                <option value="LOW_TO_HIGH">Price low to high</option>
              </select>
            </div>
            <div className="collection-items__body">
              {collection.items.slice(0, visibleCount).map((item) => (
                <div className="item-column" key={item.itemId}>
                  <ItemsData item={item} />
                </div>
              ))}
            </div>
          </div>
          <button
            className={`collection-page__button ${!visible && "invisible"}`}
            onClick={() => handleLoadMore(collection.items.length)}
          >
            Load more
          </button>
        </section>
      )}
    </>
  );
}
