import styled from "styled-components";

export const TextAreaContainer = styled.div`
  width: 80%;
  & > div {
    position: relative;
    top: -25px;
    float: right;
  }
`;

export const InputArea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  &:read-only {
    font-weight: bold;
    color: red;
    text-decoration: underline;
  }
`;
