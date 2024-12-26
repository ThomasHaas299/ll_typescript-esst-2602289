type BASE = {name: string};
// type FUNC = <T extends BASE>(objectWithName: T) => T;

// Inline-Schreibweise, wie in der Lösung
const myFunction = <T extends BASE>(objectWithName: T):T => {
  return {
    ...objectWithName,
  };
};

// Extra-Type, aber so ist es nicht gut
//const myFunction:FUNC = (objectWithName: any) => {
//  return {
//    ...objectWithName,
//  };
//};

export function Challenge() {
  const object = myFunction({
    name: "Martha",
    lastname: "Collins",
    age: 33,
  });

  const falsyObject = myFunction({
    noName: "Nope",
  });
}
