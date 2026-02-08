import React, { useState, useEffect } from "react";
import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import axios from "axios";
import SelectedCollectionSkeleton from "./SelectedCollectionSkeleton";

export default function SelectedCollection() {
  const [collection, setCollection] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = React.useCallback(async () => {
    try {
      setCollection(null);
      setError(false);
      const response = await axios.get(
        "https://remote-internship-api-production.up.railway.app/selectedCollection"
      );
      setCollection(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return (
      <header>
      <div className="selected-collection" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          backgroundColor: '#f6f6f6',
          color: 'black'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600' }}>Error fetching data.</h2>
          <button
            onClick={fetchData}
            className="selected-collection__button"
            style={{
              marginTop: 0,
              cursor: 'pointer',
              alignSelf: 'center',
              backgroundColor: 'rgba(18, 18, 18, 0.08)',
              border: '1px solid rgba(18, 18, 18, 0.2)',
              color: 'black'
            }}
          >
            Retry
          </button>
        </div>
      </header>
    );
  }

  if (!collection) {
    return <SelectedCollectionSkeleton />;
  }

  return (
    <header>
      <div className="selected-collection">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={collection.thumbnail}
          src={collection.videoLink}
          className="selected-collection__bg"
        />
        <div className="selected-collection__description">
          <img
            src={collection.logo}
            alt=""
            className="selected-collection__logo"
          />
          <h1 className="selected-collection__title">
            {collection.title}
          </h1>
          <Link to={`/user/${collection.creatorId}`} className="selected-collection__author">
            By {collection.creator}
            <img
              src={VerifiedIcon}
              className="selected-collection__author__verified"
            />
          </Link>
          <div className="selected-collection__details">{collection.amountOfItems} items · {collection.floorPrice} ETH</div>
          <Link to={`/collection/${collection.collectionId}`} className="selected-collection__button">
            <div className="green-pulse"></div>
            View Collection
          </Link>
        </div>
      </div>
    </header>
  );
}
