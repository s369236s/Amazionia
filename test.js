const foo = ({ a: 1 }, { b: 2 }) => {
  return [a, b, c, d, e];
};

console.log(foo(2, undefined, undefined, undefined, undefined));
