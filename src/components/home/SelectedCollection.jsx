import React, { useEffect } from "react";
import VerifiedIcon from "../../assets/verified.png";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Skeleton from "../ui/Skeleton";
import { useFetch } from "../collection/useCollection";

export default function SelectedCollection() {
  const { store, loading } = useContext(AppContext);

  return (
    <>
      <header>
        <div className="selected-collection">
          {loading || !store.onboarding ? (
            <Skeleton width={"100%"} />
          ) : (
            <>
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={store.onboarding.thumbnail}
                src={store.onboarding.videoLink}
                className="selected-collection__bg"
              />

              <div className="selected-collection__description">
                <img
                  src={store.onboarding.logo}
                  alt=""
                  className="selected-collection__logo"
                />
                <h1 className="selected-collection__title">
                  {store.onboarding.title}
                </h1>

                <Link
                  to={`/user/${store.onboarding.creatorId}`}
                  className="selected-collection__author"
                >
                  {store.onboarding.creator}
                  <img
                    src={VerifiedIcon}
                    className="selected-collection__author__verified"
                  />
                </Link>

                <div className="selected-collection__details">
                  {store.onboarding.amountOfItems} items ·{" "}
                  {store.onboarding.floorPrice} ETH
                </div>
                <Link
                  to={`collection/${store.onboarding.collectionId}`}
                  className="selected-collection__button"
                >
                  <div className="green-pulse"></div>
                  View Collection
                </Link>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
