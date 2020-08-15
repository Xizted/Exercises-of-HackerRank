let alice = [17, 28, 30];
let bob = [99, 16, 8];

function compareTriplet(a, b) {
  let pointAlice = 0;
  let pointBob = 0;
  let point = [];

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      pointAlice++;
    } else if (a[i] < b[i]) {
      pointBob++;
    }
  }

  point.push(pointAlice, pointBob);

  return point;
}

console.log(compareTriplet(alice, bob));
