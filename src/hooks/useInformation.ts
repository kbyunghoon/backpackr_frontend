import { createContext } from "react";
import { MOCK_LIST_DATA } from "../mock";
import { ICardInformation } from "../types/common";

type TOption = {
  key: "image" | "label" | "title" | "rating" | "description" | "userName";
  val: string;
};

interface ICardInformationContext {
  cardInformation: ICardInformation;
  handleInformation: (arg: TOption) => void;
}

export const CardInformationContext = createContext<ICardInformationContext>({
  cardInformation: MOCK_LIST_DATA,
  handleInformation: (arg) => {},
});
