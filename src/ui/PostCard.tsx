import style from "./PostCard.module.css";
import PostListSwiper from "@/ui/Swiper";

const PostCard = () => {
  return (
    <div className={style.PostCard}>
      <div className={style.user_profile}>
        <figure>
          <img src="/media/icon/dummy_profile.png" alt="프로필 이미지" />
        </figure>
        <div>
          <span>닉네임</span>
          <span>2024-03-10</span>
        </div>
      </div>
      <div className={style.content}>
        <div>예쁜 고양이 이미지 공유합니다~</div>
        <PostListSwiper />
      </div>
    </div>
  );
};

export default PostCard;
