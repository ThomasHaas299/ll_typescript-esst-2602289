export function Challenge() {

  // Lösung mit Generic
  // type MyType = string | false | Array<(number | string)>
  
  // Lösung ohne Generic
  type MyType = string | false | (number | string)[]

  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];
}
