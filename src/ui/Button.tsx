import style from "./Button.module.css";
import { PrimaryBtnType } from "@/types/ui/Type";

export const PrimaryBtn = ({ text }: PrimaryBtnType) => {
  return (
    <p className={style.PrimaryBtn}>
      <button type="submit">{text}</button>
    </p>
  );
};
