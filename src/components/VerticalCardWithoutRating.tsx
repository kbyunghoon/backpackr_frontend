import {
  CardImage,
  VerticalCardContainer,
  VerticalCardContent,
} from "../styles/CardStyles";
import { ICardInformation } from "../types/common";

const VerticalCardWithoutRating: React.FC<ICardInformation> = ({
  image,
  label,
  title,
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
    </VerticalCardContainer>
  );
};

export default VerticalCardWithoutRating;
