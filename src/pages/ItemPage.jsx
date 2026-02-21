import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShapes,
  faTag,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useFetch } from "../components/collection/useCollection";
import { useParams } from "react-router-dom";
import ItemPageSkeleton from "../components/ui/ItemPageSkeleton";
import RecommendedItems from "../components/item/RecommendedItems";

const MainItems = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const { id } = useParams();
  const {
    data: items,
    loading: mainLoading,
    setData: setItems,
  } = useFetch(`/item/${id}`, false);

  const [timerText, setTimerText] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  const requestRef = useRef();
  const endTimeRef = useRef();

  function getTimerString(expiryMs) {
    const now = Date.now();
    const distance = expiryMs - now;

    if (distance <= 0) return "Expired";

    const totalSeconds = Math.floor(distance / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  function runAnimation() {
    const currentStatus = getTimerString(endTimeRef.current);

    if (currentStatus === "Expired") {
      setIsExpired(true);
      setTimerText("Expired");
      cancelAnimationFrame(requestRef.current);
    } else {
      setTimerText(currentStatus);
      requestRef.current = requestAnimationFrame(runAnimation);
    }
  }

  useEffect(() => {
    if (items && items.expiryDate && !mainLoading) {
      setSelectedCollection(items);
      if (items.expiryDate > 1000000000000) {
        endTimeRef.current = items.expiryDate;
      } else if (items.expiryDate > 100000000) {
        endTimeRef.current = items.expiryDate * 1000;
      } else {
        endTimeRef.current = Date.now() + items.expiryDate;
      }

      requestRef.current = requestAnimationFrame(runAnimation);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [items, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {mainLoading || !items ? (
        <ItemPageSkeleton />
      ) : (
        <section id="item-info">
          <div className="container">
            <div className="row item-page__row">
              <div className="item-page__left">
                <figure className="item-page__img__wrapper">
                  <div className="item-page__img__details">
                    <FontAwesomeIcon
                      icon={faEthereum}
                      className="item-page__img__icon"
                    />
                    <div className="item-page__img__likes">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="item-page__img__icon"
                      />
                      <span className="item-page__img__likes__text">
                        {items.favorites}
                      </span>
                    </div>
                  </div>
                  <img
                    src={items.imageLink}
                    alt=""
                    className="item-page__img"
                  />
                </figure>
              </div>
              <div className="item-page__right">
                <Link
                  to={`/collection/${selectedCollection?.collectionId}`}
                  className="item-page__collection light-blue"
                >
                  {items.collection}
                </Link>
                <h1 className="item-page__name">{items.title}</h1>
                <span className="item-page__owner">
                  Owned by
                  <Link
                    to={`/user/${items.ownerId}`}
                    className="light-blue item-page__owner__link"
                  >
                    {" " + items.owner}
                  </Link>
                </span>
                <div className="item-page__details">
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">
                      {items.views} views
                    </span>
                  </div>
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">
                      {items.favorites} favorites
                    </span>
                  </div>
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faShapes}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">PFPs</span>
                  </div>
                </div>
                <div className="item-page__sale">
                  <div className="item-page__sale__header">
                    {!isExpired && <div className="green-pulse"></div>}
                    <span>
                      {isExpired ? "Sale Ended" : `Sale ends in ${timerText}`}
                    </span>
                  </div>
                  <div className="item-page__sale__body">
                    <span className="item-page__sale__label">
                      Current price
                    </span>
                    <div className="item-page__sale__price">
                      <span className="item-page__sale__price__eth">
                        {items.ethPrice} ETH
                      </span>
                      <span className="item-page__sale__price__dollars">
                        {items.usdPrice}
                      </span>
                    </div>
                    <div className="item-page__sale__buttons">
                      <div className="item-page__sale__buy">
                        <button className="item-page__sale__buy__button disabled">
                          Buy now
                        </button>
                        <button className="item-page__sale__buy__icon disabled">
                          <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                      </div>
                      <button className="item-page__sale__offer disabled">
                        <FontAwesomeIcon icon={faTag} />
                        Make offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <RecommendedItems
        collectionId={items?.collectionId}
        selectedCollection={selectedCollection?.id}
      />
    </>
  );
};

export default MainItems;
