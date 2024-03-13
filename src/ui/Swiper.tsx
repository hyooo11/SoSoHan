"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Swiper.css";

type imagesProps = {
  images: string[];
};

const PostListSwiper = ({ images }: imagesProps) => {
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
        {images.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <figure>
                <img
                  src={`http://3.39.134.138:8080/view/${data}`}
                  alt={`${index}번째 이미지`}
                />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PostListSwiper;
