import { useContext, useEffect, useState } from "react";
import { CardInformationContext } from "../hooks/useInformation";
import { InputArea, TextAreaContainer } from "../styles/TextAreaStyles";
import { ITextArea } from "../types/textArea";

const TextArea: React.FC<ITextArea> = ({
  disabled,
  placeHoldeer,
  maxLength,
  isReadOnly,
  type,
  handleValue,
}) => {
  const [inputCount, setInputCount] = useState<number>(300);

  const { cardInformation } = useContext(CardInformationContext);

  const onTextareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(
      e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
    );
    handleValue(e.currentTarget.value);
  };

  useEffect(() => {
    setInputCount(cardInformation[type]?.length || 0);
  }, []);

  return (
    <TextAreaContainer>
      <InputArea
        defaultValue={cardInformation[type]}
        disabled={disabled}
        readOnly={isReadOnly}
        placeholder={placeHoldeer || "값을 입력해 주세요."}
        onChange={onTextareaHandler}
        maxLength={maxLength || 300}
      />
      <div>
        <span>{inputCount}</span>
        <span>/{maxLength || 300} 자</span>
      </div>
    </TextAreaContainer>
  );
};

export default TextArea;
