import React from "react";
import { CardRatingWrapper } from "../styles/CardStyles";
import { ICardRating } from "../types/common";

const CardRating: React.FC<ICardRating> = ({ rating }) => {
  return (
    <CardRatingWrapper>
      {[...Array(5)].map((_, idx) => (
        <div key={idx}>
          {Number(rating) || 0 >= idx + 1 ? <>🟡</> : <>⚪</>}
        </div>
      ))}
    </CardRatingWrapper>
  );
};

export default CardRating;
