import React, { useContext, useEffect, useState } from "react";
import { CardInformationContext } from "../hooks/useInformation";
import { InputBoxContainer } from "../styles/InputBoxStyles";
import { InputBoxType } from "../types/inputBox";
import TextArea from "./TextArea";

const InputBox: React.FC<InputBoxType> = ({
  disabled,
  placeHoldeer,
  maxLength,
  isReadOnly,
  type,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [clickDisabled, setClickDisabled] = useState<boolean>(false);

  const { cardInformation, handleInformation } = useContext(
    CardInformationContext
  );

  useEffect(() => {
    inputValue !== cardInformation[type]
      ? setClickDisabled(false)
      : setClickDisabled(true);
  }, [inputValue, cardInformation, type]);

  const handleValue = (val: string) => {
    setInputValue(val);
  };

  const changeValue = () => {
    handleInformation({ key: type, val: inputValue });
  };

  return (
    <>
      <h2>{type}</h2>
      <InputBoxContainer>
        <TextArea
          type={type}
          disabled={disabled}
          placeHoldeer={placeHoldeer}
          maxLength={maxLength}
          isReadOnly={isReadOnly}
          handleValue={handleValue}
        />
        {!disabled && !isReadOnly && (
          <button disabled={clickDisabled} onClick={changeValue}>
            save
          </button>
        )}
      </InputBoxContainer>
    </>
  );
};

export default InputBox;
