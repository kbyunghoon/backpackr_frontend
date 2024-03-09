import {
  CardImage,
  HorizontalCardContainer,
  HorizontalCardContent,
} from "../styles/CardStyles";
import { ICardInformation } from "../types/common";
import CardRating from "./CardRating";

const HorizontalCard: React.FC<ICardInformation> = ({
  image,
  title,
  rating,
  description,
  userName,
}) => {
  return (
    <HorizontalCardContainer>
      <CardImage>
        <img src={image} className="logo react" alt="React logo" />
      </CardImage>
      <HorizontalCardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <CardRating rating={rating} />
          <span className="user-name">{userName}</span>
        </div>
      </HorizontalCardContent>
    </HorizontalCardContainer>
  );
};

export default HorizontalCard;
