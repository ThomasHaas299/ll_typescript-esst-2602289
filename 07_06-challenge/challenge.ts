const ComplexFunction = () => {
  return () => {
    return [2, { courseName: "TypeScript" }];
  };
};

export function Challenge() {
  type ComplexFunctionType = typeof ComplexFunction;
  type ComplexFunctionReturnType = ReturnType<ComplexFunctionType>;
  type ComplexFunctionReturnType1 = ReturnType<ComplexFunctionReturnType>;
  type FullType = ComplexFunctionReturnType1[number];
  type MeineAbleitung = Exclude<FullType, number>;

  type ReturnedObjectType = MeineAbleitung;
}
