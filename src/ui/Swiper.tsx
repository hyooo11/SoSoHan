"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Swiper.css";

type imagesProps = {
  images: string[] | null | undefined;
};

const PostListSwiper = ({ images }: imagesProps) => {
  const viweOption = () => {
    if (images) {
      if (images.length >= 3) {
        return 1.5;
      } else if (images.length <= 2) {
        return 1;
      }
    }
  };
  return (
    <>
      <Swiper
        slidesPerView={viweOption()}
        spaceBetween={10}
        centeredSlides={false}
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className="PostListSwiper"
      >
        {images?.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <figure>
                <img src={data} alt={`${index}번째 이미지`} />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PostListSwiper;
