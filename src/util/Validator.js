export const ValidateForm = {
  // 이름 : 영어 대/소문자, 한글만 입력가능, 1글자 이상
  nameRegex: /^[가-힣a-zA-Z]{1,}$/,
  // 닉네임 : 영어 대/소문자, 숫자, 한글 자모음 조합, 2~10자 이내
  nicknameRegex: /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/,
  // 이메일
  emailRegex: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
  // 비밀번호 : 최소 8자 이상, 하나의 소문자, 하나의 숫자, 하나의 특수문자를 포함, 공백 허용하지 않음
  pwRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
  // 핸드폰
  phoneRegex: /^\d{2,3}-\d{3,4}-\d{4}$/,
};
