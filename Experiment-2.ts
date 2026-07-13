//1.using 'any' type
let data: any;
data = "Hello";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);
//2.using 'unknown: type
let value: unknown;
value = "TypeScript";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe
}
value = 50;
if (typeof value === "number") {
  console.log(value + 10); // Safe
}
//3.using 'void':type
function greet(name: string): void {
  console.log("Hello, " + name);
}git 
greet("Alice");
