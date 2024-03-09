export interface ICardRating {
  rating?: string;
}

export interface ICardInformation extends ICardRating {
  image: string;
  label: string;
  title: string;
  description: string;
  userName: string;
}

export interface ICardType {
  type: "label" | "title" | "userName" | "rating" | "description";
}
