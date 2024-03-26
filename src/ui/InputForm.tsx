"use client";
import style from "./InputForm.module.css";
import {
  InputFormIconLabelType,
  InputFormTextLabelType,
} from "@/types/ui/Type";

export const InputFormIconLabel = ({
  icon,
  type,
  name,
  register,
}: InputFormIconLabelType) => {
  return (
    <div className={style.InputFormIconLabel}>
      <label htmlFor={name} className="sr-only" />
      <div className={style.td_from}>
        <span className={style.icon}>{icon}</span>
        <input
          type={type}
          id={name}
          name={name}
          {...(register && register(name))}
          className={style.form_control}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export const InputFormTextLabel = ({
  label,
  type,
  name,
  register,
  placeholder,
  errorMessage,
}: InputFormTextLabelType) => {
  return (
    <>
      <div className={style.InputFormTextLabel}>
        <label htmlFor={name}>
          <span className="req">{label}</span>
        </label>
        <div className={style.td_from}>
          <input
            type={type}
            id={name}
            name={name}
            {...(register && register(name))}
            className={style.form_control}
            placeholder={placeholder}
            autoComplete="off"
          />
        </div>
      </div>
      {errorMessage !== null ? (
        <span className={style.error_msg}>{errorMessage}</span>
      ) : null}
    </>
  );
};
