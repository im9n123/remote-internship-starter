import React from "react";
import Skeleton from "./Skeleton";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const RecommendedItemsSkeleton = () => {
  return (
    <section id="recommended-items">
      <div className="container">
        <div className="row recommended-items__row">
          <div className="recommended-items__wrapper">
            <div className="recommended-items__header">
              <Skeleton width={"240px"} height={"16px"} borderRadius={"4px"} />
            </div>
            <div className="recommended-items__body">
              {
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
                  {new Array(7).fill(0).map((_, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="item-column"
                        key={index}
                        style={{ width: "100%" }}
                      >
                        <div to={"/item"} className="item">
                          <figure className="item__img__wrapper">
                            <Skeleton width={"100%"} height={"100%"} />
                          </figure>
                          <div className="item__details">
                            <span className="item__details__name">
                              <Skeleton
                                width={"80px"}
                                height={"16px"}
                                borderRadius={"4px"}
                              />
                            </span>
                            <span className="item__details__price">
                              <Skeleton
                                width={"48px"}
                                height={"16px"}
                                borderRadius={"4px"}
                              />
                            </span>
                            <span className="item__details__last-sale">
                              <Skeleton
                                width={"120px"}
                                height={"16px"}
                                borderRadius={"4px"}
                              />
                            </span>
                          </div>
                          <div className="item__see-more"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              }
            </div>
            <div className="recommended-items__footer">
              <Skeleton width={"120px"} height={"24px"} borderRadius={"4px"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedItemsSkeleton;
