export default {};

type IsNumber<T> = T extends number ? "number" : "other";

type withNumber = IsNumber<number>;
type withOther = IsNumber<string>;

// -------------------------------
type TypeName<T> = T extends number
  ? "number"
  : T extends string
  ? "stringfasdfaf"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends symbol
  ? "symbol"
  : T extends bigint
  ? "bigint"
  : T extends Function
  ? "function"
  : "other";

function typeName<T>(t: T): TypeName<T> {
  if (t == null) return 'null' as TypeName<T>
  return typeof t as TypeName<T>;
}

const str = typeName("hello world");
const num = typeName(123);
const bool = typeName(true);
const undef = typeName(undefined);
const sym = typeName(Symbol("star"));
const big = typeName(32n);
const func = typeName(function () {});
const obj = typeName(null)

console.log(typeName(null))
