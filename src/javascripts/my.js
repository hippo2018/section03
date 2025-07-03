// es6
export default () => {
  const obj = { a: 1, b: 2 };
  const newObj = { ...obj, c: 3 };
  // { a: 1, b: 2, c: 3 }
  console.log('webpack!!', newObj);
}

// es5
// export default function() {
//   console.log('webpack!!');
// }
