import InputBox from "./InputBox";

const InputForm = () => {
  return (
    <div>
      <InputBox type="title" isReadOnly />
      <InputBox type="description" disabled />
      <InputBox type="label" />
    </div>
  );
};

export default InputForm;
