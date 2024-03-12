import styled from "styled-components";

export const VerticalCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  border: 1px solid;
  border-radius: 5px;
`;

export const HorizontalCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  border: 1px solid;
  border-radius: 5px;
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 200px;
  height: 200px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const VerticalCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 10px;
  border-top: 1px solid;
`;

export const HorizontalCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 10px;
  border-left: 1px solid;
  min-width: 200px;

  & > div {
    display: flex;
    flex-direction: row;
  }

  .user-name::before {
    content: "|";
    margin: 0px 5px;
  }
`;

export const CardLabel = styled.div`
  color: gray;
`;

export const CardRatingWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 10px 20px;
  flex-wrap: wrap;
`;
