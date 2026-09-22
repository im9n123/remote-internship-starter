import React from "react";
import { Link } from "react-router-dom";

export default function PopularCollections() {
  return (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body">
            {new Array(6).fill(0).map((_, index) => (
              <div key={index} className="collection-column">
                <Link to="/collection" className="collection">
                  <img
                    src="https://i2c.seadn.io/collection/boredapeyachtclub/banner/3ddcabd06bb257af35f029b3c17163/e13ddcabd06bb257af35f029b3c17163.jpeg?w=2000"
                    alt=""
                    className="collection__img"
                  />
                  <div className="collection__info">
                    <h3 className="collection__name">Bored Ape Kennel Club</h3>
                    <div className="collection__stats">
                      <div className="collection__stat">
                        <span className="collection__stat__label">Floor</span>
                        <span className="collection__stat__data">0.46 ETH</span>
                      </div>
                      <div className="collection__stat">
                        <span className="collection__stat__label">
                          Total Volume
                        </span>
                        <span className="collection__stat__data">281K ETH</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
