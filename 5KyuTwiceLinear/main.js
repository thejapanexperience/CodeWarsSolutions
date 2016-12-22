function dblLinear(n) {
  const u = [1];

  for (let i = 0; i < n; i++) {
    const lastHighest = u[u.length - 1];
    const x = u[i];
    const y = (2 * x) + 1;
    if (u.indexOf(y) === -1) {
      u.push(y);
    }
    if (y < lastHighest) {
      u.sort((a, b) => a - b);
    }
    const z = (3 * x) + 1;
    if (u.indexOf(z) === -1) {
      u.push(z);
    }
  }
  console.log('u[n]: ', u[n]);
  return (u[n]);
}
dblLinear(50);
