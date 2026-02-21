import React from "react";
import Skeleton from "./Skeleton";
import VerifiedIcon from "../../assets/verified.png";

const TrendingList = ({ amount }) => {
  return (
    <>
      {new Array(amount).fill(0).map((_, index) => (
        <div to={"/collection"} key={index} className="trending-collection">
          <div className="trending-collection__rank">
            <Skeleton width={"10px"} height={"20px"} borderRadius={"2px"} />
          </div>
          <div className="trending-collection__collection">
            <figure className="trending-collection__img__wrapper">
              <Skeleton width={"100%"} height={"100%"} />
            </figure>

            <div className="trending-collection__name">
              <Skeleton width={"130px"} height={"18px"} borderRadius={"2px"} />
            </div>

            <img src={VerifiedIcon} className="trending-collection__verified" />
          </div>
          <div className="trending-collection__price">
            <span className="trending-collection__price__span">
              <Skeleton width={"70px"} height={"18px"} borderRadius={"2px"} />
            </span>
          </div>
          <div className="trending-collection__volume">
            <span className="trending-collection__volume__span">
              <Skeleton width={"70px"} height={"18px"} borderRadius={"2px"} />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrendingList;
