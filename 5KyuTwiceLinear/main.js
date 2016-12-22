function dblLinear(n) {
  const u = [1];

  for (let i = 0; i < n; i++) {
    const x = u[i];
    const z = (3 * x) + 1;
    if (u.indexOf(z) === -1) {
      u.push(z);
    }
    const y = (2 * x) + 1;
    if (u.indexOf(y) === -1) {
      u.push(y);
    } u.sort((a, b) => a - b);
  }
  console.log('u[n]: ', u[n]);
  return (u[n]);
}
dblLinear(50);
