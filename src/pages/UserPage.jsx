import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../components/collection/useCollection";
import ItemsData from "../components/ui/ItemsData";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import UserPageSkeleton from "../components/ui/UserPageSkeleton";

export default function UserPage() {
  const { id } = useParams();
  const { handleLoadMore, visibleCount, visible } = useContext(AppContext);
  const [sort, setSort] = useState("DEFAULT");
  const [originalSort, setOriginalSort] = useState(null);
  const {
    data: user,
    loading: userLoading,
    setData: setUser,
  } = useFetch(`/user/${id}`, true);

  function sortCollection() {
    setOriginalSort(user);
    if (sort === "HIGH_TO_LOW") {
      setUser({
        ...user,
        items: user.items.slice().sort((a, b) => b.price - a.price),
      });
    } else if (sort === "LOW_TO_HIGH") {
      setUser({
        ...user,
        items: user.items.slice().sort((a, b) => a.price - b.price),
      });
    } else if (sort === "DEFAULT") {
      setUser({
        ...originalSort,
      });
    }
  }

  useMemo(() => {
    sortCollection();
  }, [sort]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {userLoading || !user ? (
        <UserPageSkeleton />
      ) : (
        <>
          <header
            style={{
              backgroundImage: `url(${user.imageLink})`,
            }}
            id="user-header"
          ></header>

          <section id="user-info">
            <div className="row">
              <div className="user-info__wrapper">
                <figure className="user-info__img__wrapper">
                  <img
                    src={user.profilePicture}
                    alt=""
                    className="user-info__img"
                  />
                </figure>
                <h1 className="user-info__name">{user.name}</h1>
                <div className="user-info__details">
                  <span className="user-info__wallet">
                    <FontAwesomeIcon
                      icon={faEthereum}
                      className="user-info__wallet__icon"
                    />
                    <span className="user-info__wallet__data">
                      {user.walletCode}
                    </span>
                  </span>
                  <span className="user-info__year">
                    <span className="user-info__year__data">
                      Joined {user.creationDate}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="user-items">
            <div className="row user-items__row">
              <div className="user-items__header">
                <div className="user-items__header__left">
                  <span className="user-items__header__text">
                    {user.items.length + " items"}
                  </span>
                </div>
                <select
                  value={sort}
                  className="user-items__header__sort"
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="DEFAULT">Recently purchased</option>
                  <option value="HIGH_TO_LOW">Price high to low</option>
                  <option value="LOW_TO_HIGH">Price low to high</option>
                </select>
              </div>
              <div className="user-items__body">
                {user.items.slice(0, visibleCount).map((item) => (
                  <div className="item-column" key={item.itemId}>
                    <ItemsData item={item} />
                  </div>
                ))}
              </div>
            </div>
            <button
              className={`collection-page__button ${!visible && "invisible"}`}
              onClick={() => handleLoadMore(user.items.length)}
            >
              Load more
            </button>
          </section>
        </>
      )}
    </>
  );
}
