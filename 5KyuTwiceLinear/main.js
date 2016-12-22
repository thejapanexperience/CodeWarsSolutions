function dblLinear(n) {
  const u = [1];

  for (let i = 0; u.length < n + (n * 0.15); i++) {
    const x = u[i];
    const y = (2 * x) + 1;
    if (u.indexOf(y) === -1) {
      u.push(y);
    }
    if (i % 5 === 0) {
      u.sort((a, b) => a - b);
    }
    const z = (3 * x) + 1;
    if (u.indexOf(z) === -1) {
      u.push(z);
    }
  }
  u.sort((a, b) => a - b);
  console.log('u[n]: ', u[n]);
  return (u[n]);
}
dblLinear(100);
