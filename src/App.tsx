import { useState } from "react";
import HorizontalCard from "./components/HorizontalCard";
import InputForm from "./components/InputForm";
import VerticalCard from "./components/VerticalCard";
import VerticalCardWithoutDescription from "./components/VerticalCardWithoutDescription";
import VerticalCardWithoutRating from "./components/VerticalCardWithoutRating";
import { CardInformationContext } from "./hooks/useInformation";
import { MOCK_LIST_DATA } from "./mock";
import { CardWrapper } from "./styles/CardStyles";
import { ICardInformation } from "./types/common";

type TOption = {
  key: "image" | "label" | "title" | "rating" | "description" | "userName";
  val: string;
};

const App = () => {
  const [cardInformation, setCardInformation] =
    useState<ICardInformation>(MOCK_LIST_DATA);

  const handleInformation = ({ key, val }: TOption) => {
    setCardInformation((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div>
      <CardInformationContext.Provider
        value={{
          cardInformation,
          handleInformation,
        }}
      >
        <CardWrapper>
          <VerticalCard {...cardInformation} />
          <VerticalCardWithoutDescription {...cardInformation} />
          <VerticalCardWithoutRating {...cardInformation} />
          <HorizontalCard {...cardInformation} />
        </CardWrapper>
        <div>
          <InputForm />
        </div>
      </CardInformationContext.Provider>
    </div>
  );
};

export default App;
