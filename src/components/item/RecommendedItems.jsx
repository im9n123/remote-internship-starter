import { faShoppingBag, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useFetch } from "../collection/useCollection";
import RecommendedItemsSkeleton from "../ui/RecommendedItemsSkeleton";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { useState } from "react";

export default function RecommendedItems({ collectionId, selectedCollection }) {
  const {
    data: collections,
    loading: recLoading,
    setData: setCollections,
  } = useFetch(`/collection/${collectionId}`, false);

  return (
    <>
      {recLoading || !collections ? (
        <RecommendedItemsSkeleton />
      ) : (
        <section id="recommended-items">
          <div className="container">
            <div className="row recommended-items__row">
              <div className="recommended-items__wrapper">
                <div className="recommended-items__header">
                  <FontAwesomeIcon icon={faTableCells} />
                  <h3 className="recommended-items__header__title">
                    More from this collection
                  </h3>
                </div>
                <div className="recommended-items__body">
                  <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={16}
                    slidesPerView={1}
                    navigation
                    loop={{ loop: true }}
                    breakpoints={{
                      480: {
                        slidesPerView: 2,
                      },

                      768: {
                        slidesPerView: 3,
                      },

                      1024: {
                        slidesPerView: 4,
                      },

                      1200: {
                        slidesPerView: 5,
                      },

                      1600: {
                        slidesPerView: 6,
                      },
                    }}
                  >
                    {collections.items
                      .filter((item) => item.itemId !== selectedCollection)
                      .slice(0, 9)
                      .map((item) => (
                        <SwiperSlide key={item.itemId}>
                          <div
                            className="item-column"
                            style={{ width: "100%" }}
                          >
                            <Link to={`/item/${item.itemId}`} className="item">
                              <figure className="item__img__wrapper">
                                <img
                                  src={item.imageLink}
                                  alt=""
                                  className="item__img"
                                />
                              </figure>
                              <div className="item__details">
                                <span className="item__details__name">
                                  {item.title}
                                </span>
                                <span className="item__details__price">
                                  {item.price} ETH
                                </span>
                                <span className="item__details__last-sale">
                                  Last sale: {item.lastSale} ETH
                                </span>
                              </div>
                              <div className="item__see-more">
                                <button className="item__see-more__button">
                                  See More
                                </button>
                                <div className="item__see-more__icon">
                                  <FontAwesomeIcon icon={faShoppingBag} />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
                <div className="recommended-items__footer">
                  <Link
                    to={`/collection/${collectionId}`}
                    className="recommended-items__footer__button"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
