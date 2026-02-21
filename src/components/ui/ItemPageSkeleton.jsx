import React from "react";
import Skeleton from "./Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const ItemPageSkeleton = () => {
  return (
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
                <Skeleton width={"36px"} height={"100%"} borderRadius={"4px"} />
              </div>
              <Skeleton width={"100%"} height={"100%"} borderRadius={"4px"} />
            </figure>
          </div>
          <div className="item-page__right">
            <div className="item-page__collection light-blue">
              <Skeleton width={"140px"} height={"16px"} borderRadius={"4px"} />
            </div>
            <h1 className="item-page__name">
              <Skeleton width={"240px"} height={"16px"} borderRadius={"4px"} />
            </h1>
            <span className="item-page__owner">
              <Skeleton width={"140px"} height={"16px"} borderRadius={"4px"} />
            </span>
            <div className="item-page__details">
              <div className="item-page__detail">
                <Skeleton width={"84px"} height={"16px"} borderRadius={"4px"} />
              </div>
              <div className="item-page__detail">
                <Skeleton width={"84px"} height={"16px"} borderRadius={"4px"} />
              </div>
              <div className="item-page__detail">
                <Skeleton width={"84px"} height={"16px"} borderRadius={"4px"} />
              </div>
            </div>
            <div className="item-page__sale">
              <div className="item-page__sale__header">
                <Skeleton
                  width={"240px"}
                  height={"16px"}
                  borderRadius={"4px"}
                />
              </div>
              <div className="item-page__sale__body">
                <span className="item-page__sale__label">
                  {" "}
                  <Skeleton
                    width={"84px"}
                    height={"16px"}
                    borderRadius={"4px"}
                  />
                </span>
                <div className="item-page__sale__price">
                  <span className="item-page__sale__price__eth">
                    {" "}
                    <Skeleton
                      width={"152px"}
                      height={"16px"}
                      borderRadius={"4px"}
                    />
                  </span>
                  <span className="item-page__sale__price__dollars">
                    {" "}
                    <Skeleton
                      width={"152px"}
                      height={"16px"}
                      borderRadius={"4px"}
                    />
                  </span>
                </div>
                <div className="item-page__sale__buttons">
                  <Skeleton
                    width={"100%"}
                    height={"48px"}
                    borderRadius={"12px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemPageSkeleton;
