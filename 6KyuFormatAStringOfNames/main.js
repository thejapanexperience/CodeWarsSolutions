function list(names) {
  // iterate through array
  // if before second last, follow with comma
  // if second last, follow with ampersand
  // if last, follow with nothing
  const outputArr = [];
  for (let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      outputArr.push(`${names[i].name}`);
    }
    if (i === names.length - 2) {
      outputArr.push(`${names[i].name} & `);
    }
    if (i < names.length - 2) {
      outputArr.push(`${names[i].name}, `);
    }
  }
  const output = outputArr.join('');
  console.log('output: ', output);
  return output;
}

list([{ name: 'Bart' }]);
// returns 'Bart'
