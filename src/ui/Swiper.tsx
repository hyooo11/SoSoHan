"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Swiper.css";

const PostListSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={10}
        centeredSlides={false}
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className="PostListSwiper"
      >
        <SwiperSlide>
          <figure>
            <img src="/media/dummy_image.jpg" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/media/dummy_image.jpg" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/media/dummy_image.jpg" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src="/media/dummy_image.jpg" />
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PostListSwiper;
