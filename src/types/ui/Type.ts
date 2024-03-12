export type PrimaryBtnType = {
  text: string;
};

export type InputProfileType = {
  priview: string | null | undefined;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputFormIconLabelType = {
  icon: React.ReactNode;
  type: string;
  name: string;
  register: any;
};

export type InputFormTextLabelType = {
  label: string;
  type: string;
  name: string;
  register: any;
  placeholder: string;
  errorMessage?: string | null | undefined;
};
