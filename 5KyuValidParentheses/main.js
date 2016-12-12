function validParentheses(parens) {
  // Strategy
  // if right === false
  // if left, must be an equivalent right
  let output = true;
  let leftCount = 0;
  let rightCount = 0;
  const arr = parens.split('');
  if (arr.length % 2 !== 0) {
    output = false;
  }
  if (arr[0] === ')') {
    output = false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      leftCount += 1;
    }
    if (arr[i] === ')') {
      rightCount += 1;
    }
    if (rightCount > leftCount) {
      output = false;
    }
  }
  if (leftCount !== rightCount) {
    output = false;
  }
  console.log('output: ', output);
  return output;
}
validParentheses('(())((()())())');
