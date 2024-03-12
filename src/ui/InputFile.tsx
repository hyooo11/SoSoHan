import style from "./InputFile.module.css";
import { InputProfileType } from "@/types/ui/Type";

export const InputProfile = ({
  priview,
  label,
  onChange,
}: InputProfileType) => {
  if (!priview) priview = "/media/icon/dummy_profile.png";
  return (
    <div className={style.InputProfile}>
      <div className={style.tit_box}>
        <p>프로필 설정</p>
        <span>필수 등록은 아니며 나중에 언제든 변경이 가능합니다 :)</span>
      </div>
      <div className={style.priview_wrap}>
        <figure className={style.priview}>
          <img src={priview} alt="프로필 이미지" />
        </figure>
      </div>

      <div className={style.tr_form}>
        <label htmlFor="profileImg" className="th-label">
          <span className="req">{label}</span>
        </label>
        <div className="td-form">
          <input
            type="file"
            accept="image/*"
            onChange={onChange}
            id="profileImg"
          />
        </div>
      </div>
    </div>
  );
};
