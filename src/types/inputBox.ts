import { ICardType } from "./common";

export interface InputBoxType extends ICardType {
  disabled?: boolean;
  placeHoldeer?: "string";
  maxLength?: number;
  isReadOnly?: boolean;
}
