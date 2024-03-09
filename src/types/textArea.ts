import { ICardType } from "./common";

export interface ITextArea extends ICardType {
  disabled?: boolean;
  placeHoldeer?: "string";
  maxLength?: number;
  isReadOnly?: boolean;
  handleValue: (val: string) => void;
}
