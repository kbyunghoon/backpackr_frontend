# 백패커 코드테스트 과제

```
yarn install
yarn dev
```

# 카드 UI

```javascript
// mock/index.ts
// 카드 기본 값
export const MOCK_LIST_DATA: ICardInformation = {
  image: ReactSvg,
  label: "Card Label",
  title: "Card Title",
  rating: "3",
  description: "description",
  userName: "홍길동",
};
```

```javascript
// 이미지 크기 변경
// styles/CardStyles.ts
export const CardImage = styled.div`
  width: 200px;
  height: 200px;
`;
```

# 입력폼 UI

```javascript
// InputForm.tsx
// type 수정 시 입력 폼 수정하는 값 변경
// type 종류 : "label" | "title" | "userName" | "rating" | "description"
// isReadOnly : 읽기전용 (boolean) - save버튼 비활성화
// disabled : 비활성화 (boolean) - save버튼 비활성화
// placeHolder : placeHolder 내용(string)
// maxLenght : 입력 최대 글자 수 지정(number)
// 내용 변경 시 save 버튼 활성화 및 클릭 시 값 변경

<InputBox type="title" isReadOnly />
```
