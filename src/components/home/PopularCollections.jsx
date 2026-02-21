import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Carousel from "../Carousel";
import CarouselSkeleton from "../ui/CarouselSkeleton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PopularCollections() {
  AOS.init();
  const { loading, store } = useContext(AppContext);
  return (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2
            className="popular-collections__title"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-mirror="false"
          >
            Popular Collections
          </h2>
          <div className="popular-collections__body">
            {loading ? (
              <CarouselSkeleton />
            ) : (
              <Carousel data={store.popularCollections} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
