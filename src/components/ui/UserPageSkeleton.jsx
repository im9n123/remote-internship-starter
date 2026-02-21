import React from "react";
import Skeleton from "./Skeleton";
import CollectionsCardSkeleton from "./CollectionsCardSkeleton";

const UserPageSkeleton = () => {
  return (
    <>
      <header id="user-header">
        <Skeleton width={"100%"} height={"100%"} />
      </header>

      <section id="user-info">
        <div className="row">
          <div className="user-info__wrapper">
            <figure className="user-info__img__wrapper">
              <Skeleton width={"100%"} height={"100%"} />
            </figure>
            <h1 className="user-info__name">
              <Skeleton width={"240px"} height={"16px"} borderRadius={"4px"} />
            </h1>
            <div className="user-info__details">
              <span className="user-info__wallet">
                <Skeleton
                  width={"300px"}
                  height={"16px"}
                  borderRadius={"4px"}
                />
              </span>
              <span className="user-info__year">
                <Skeleton
                  width={"120px"}
                  height={"16px"}
                  borderRadius={"4px"}
                />
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
                <Skeleton
                  width={"120px"}
                  height={"16px"}
                  borderRadius={"4px"}
                />
              </span>
            </div>
            <select className="user-items__header__sort">
              <option value="DEFAULT">Recently purchased</option>
              <option value="HIGH_TO_LOW">Price high to low</option>
              <option value="LOW_TO_HIGH">Price low to high</option>
            </select>
          </div>
          <div className="user-items__body">
            {new Array(12).fill(0).map((_, index) => (
              <div className="item-column" key={index}>
                <CollectionsCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserPageSkeleton;
