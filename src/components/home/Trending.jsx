import React from "react";
import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import TrendingSkeleton from "../ui/TrendingSkeleton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Trending() {
  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  const { store, loading } = useContext(AppContext);
  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div
            className="trending__header"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-mirror="false"
          >
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={"/collections"}>
              View All
            </Link>
          </div>
          <div
            className="trending__body"
            data-aos="fade-up"
            data-aos-mirror="false"
            data-aos-duration="700"
          >
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
                {loading ? (
                  <TrendingSkeleton amount={5} />
                ) : (
                  store.trendingNFT.slice(0, 5).map((NFT, index) => (
                    <Link
                      to={`/collection/${NFT.collectionId}`}
                      key={NFT.id || `trending-left-${index}`}
                      className="trending-collection"
                    >
                      <div className="trending-collection__rank">
                        {NFT.rank}
                      </div>
                      <div className="trending-collection__collection">
                        <figure className="trending-collection__img__wrapper">
                          <img
                            src={NFT.imageLink}
                            alt=""
                            className="trending-collection__img"
                          />
                        </figure>

                        <div className="trending-collection__name">
                          {NFT.title}
                        </div>

                        <img
                          src={VerifiedIcon}
                          className="trending-collection__verified"
                        />
                      </div>
                      <div className="trending-collection__price">
                        <span className="trending-collection__price__span">
                          {`${Number(NFT.floor).toFixed(2)} ETH`}
                        </span>
                      </div>
                      <div className="trending-collection__volume">
                        <span className="trending-collection__volume__span">
                          {`${NFT.totalVolume} ETH`}
                        </span>
                      </div>
                    </Link>
                  ))
                )}
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
                {loading ? (
                  <TrendingSkeleton amount={5} />
                ) : (
                  store.trendingNFT.slice(5, 10).map((NFT, index) => (
                    <Link
                      to={`/collection/${NFT.collectionId}`}
                      key={NFT.id || `trending-right-${index}`}
                      className="trending-collection"
                    >
                      <div className="trending-collection__rank">
                        {NFT.rank}
                      </div>
                      <div className="trending-collection__collection">
                        <figure className="trending-collection__img__wrapper">
                          <img
                            src={NFT.imageLink}
                            alt=""
                            className="trending-collection__img"
                          />
                        </figure>
                        <div className="trending-collection__name">
                          {NFT.title}
                        </div>
                        <img
                          src={VerifiedIcon}
                          className="trending-collection__verified"
                        />
                      </div>
                      <div className="trending-collection__price">
                        <span className="trending-collection__price__span">
                          {`${(Math.floor(Number(NFT.floor) * 100) / 100).toFixed(2)} ETH`}
                        </span>
                      </div>
                      <div className="trending-collection__volume">
                        <span className="trending-collection__volume__span">
                          {`${NFT.totalVolume} ETH`}
                        </span>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
