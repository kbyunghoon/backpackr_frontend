import {
  CardImage,
  VerticalCardContainer,
  VerticalCardContent,
} from "../styles/CardStyles";
import { ICardInformation } from "../types/common";
import CardRating from "./CardRating";

const VerticalCard: React.FC<ICardInformation> = ({
  image,
  label,
  title,
  rating,
  description,
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
          <span>{description}</span>
        </VerticalCardContent>
      )}
    </VerticalCardContainer>
  );
};

export default VerticalCard;
