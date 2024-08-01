import VerifiedIcon from "../../assets/verified.png";
import TrendingCollection from "../../assets/trending-collection.avif";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../ui/Skeleton";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
export default function Trending() {
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://remote-internship-api-production.up.railway.app/trendingNFTs"
      );
      if (nftData === "False") {
        setNftData([]);
      }
      setNftData(data.data);
      console.log(nftData);
    } catch (error) {
      setNftData(false);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderSkeletons = () => {
    return Array(10)
      .fill(0)
      .map((_, index) => (
        <div className="trending-collection" key={index}>
          <div className="trending-collection__rank">
          <Skeleton width="22px" height='20px' borderRadius="4px"/>
           </div>
          <div className="trending-collection__collection">
            <figure className="trending-collection__img__wrapper">
              <Skeleton width="100%" height="100%" borderRadius="4px" />
            </figure>
            <div className="trending-collection__name">
              <Skeleton width="160px" height="18px" borderRadius="4px" />
            </div>
          </div>
          <div className="trending-collection__price">
            <Skeleton width="70px" height="18px" borderRadius="4px" />
          </div>
          <div className="trending-collection__volume">
            <Skeleton width="70px" height="18px" borderRadius="4px" />
          </div>
        </div>
      ));
  };
  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={"/collections"}>
              View All
            </Link>
          </div>
          <div className="trending__body">
            <div className="trending-column">
              <div className="trending-column__header">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {loading
                  ? renderSkeletons()
                  : nftData.slice(0, 5).map((nft, index) => (
                      <Link
                        to={"/collection"}
                        key={index}
                        className="trending-collection"
                      >
                        <div className="trending-collection__rank">
                          {nft?.rank}
                        </div>
                        <div className="trending-collection__collection">
                          <figure className="trending-collection__img__wrapper">
                            <img
                              src={nft?.imageLink}
                              alt=""
                              className="trending-collection__img"
                            />
                          </figure>
                          <div className="trending-collection__name">
                            {nft?.title}
                          </div>
                          <img
                            src={VerifiedIcon}
                            className="trending-collection__verified"
                          />
                        </div>
                        <div className="trending-collection__price">
                          <span className="trending-collection__price__span">
                            {Math.round(Number(nft.floor) * 100) / 100} ETH
                          </span>
                        </div>
                        <div className="trending-collection__volume">
                          <span className="trending-collection__volume__span">
                            {nft.totalVolume} ETH
                          </span>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>

            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {loading
                  ? renderSkeletons()
                  : nftData.slice(5, 10).map((nft, index) => (
                      <Link
                        to={"/collection"}
                        key={index + 5}
                        className="trending-collection"
                      >
                        <div className="trending-collection__rank">
                          {nft.rank}
                        </div>
                        <div className="trending-collection__collection">
                          <figure className="trending-collection__img__wrapper">
                            <img
                              src={nft.imageLink}
                              alt=""
                              className="trending-collection__img"
                            />
                          </figure>
                          <div className="trending-collection__name">
                            {nft?.title}
                          </div>
                          <img
                            src={VerifiedIcon}
                            className="trending-collection__verified"
                          />
                        </div>
                        <div className="trending-collection__price">
                          <span className="trending-collection__price__span">
                            {Math.round(Number(nft.floor) * 100) / 100} ETH
                          </span>
                        </div>
                        <div className="trending-collection__volume">
                          <span className="trending-collection__volume__span">
                            {nft.totalVolume} ETH
                          </span>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
