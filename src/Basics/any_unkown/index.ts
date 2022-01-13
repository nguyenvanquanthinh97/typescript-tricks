let exampleAny: any;
let exampleUnknow: unknown;

// any
exampleAny = 123;
exampleAny = "Hello";

// unknown
exampleUnknow = 123;
exampleUnknow = "World";

// any
exampleAny.allows.anything.you.can.imagine();
let anyBool: boolean = exampleAny;

// unknown
if (typeof exampleUnknow === "string") {
  exampleUnknow.trim();
}

if (typeof exampleUnknow === "boolean") {
  let unknownBool: boolean = exampleUnknow;
}
