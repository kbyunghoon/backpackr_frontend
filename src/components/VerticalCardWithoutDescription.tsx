import {
  CardImage,
  VerticalCardContainer,
  VerticalCardContent,
} from "../styles/CardStyles";
import { ICardInformation } from "../types/common";
import CardRating from "./CardRating";

const VerticalCardWithoutDescription: React.FC<ICardInformation> = ({
  image,
  label,
  title,
  rating,
  userName,
}) => {
  return (
    <VerticalCardContainer>
      <CardImage>
        <img src={image} className="logo react" alt="React logo" />
      </CardImage>
      <VerticalCardContent>
        <span className="card-label">{label}</span>
        <span className="card-title">{title}</span>
        <span>{userName}</span>
      </VerticalCardContent>
      {rating && (
        <VerticalCardContent>
          <CardRating rating={rating} />
        </VerticalCardContent>
      )}
    </VerticalCardContainer>
  );
};

export default VerticalCardWithoutDescription;
