//기본타입
//number
//string
//boolean
//null
//undifined
let age: number = 3;

let useName: string = "hansukim";

let isInstructor: boolean = false;

//복잡한 자료형
//배열
//오브젝트
let hobbies: string[] = ["cooking", "sports"];

let person: Person = { name: "MAX", age: 32 };

let peopel: Person[] = [
  { name: "MAX", age: 32 },
  { name: "MINI", age: 33 },
];

//타입추론
//변수를 만들고나서 초기값을 할당시 타입스크립트에서 타입추론을 하여서 타입을 세팅한다.
let course = 1; // course : number 타입으로 추론

//유니온타입
let union: string | number = "union type!";

union = 123;

//타입별칭
type Person = { name: string; age: number };

//함수와 타입
function add2(a: number, b: number): number {
  return a + b;
}
function printOutput(value: any): void {
  console.log(value);
}

//제네릭
function insertAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["1", "2", "3"], "-1");
