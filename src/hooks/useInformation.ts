import { createContext } from "react";
import ReactSvg from "../assets/react.svg";
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
  cardInformation: {
    image: ReactSvg,
    label: "Card Label",
    title: "Card Title",
    rating: "3",
    description: "description",
    userName: "이름",
  },
  handleInformation: (arg) => {},
});
