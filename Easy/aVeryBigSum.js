let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVerySum(ar) {
  let total = 0;

  ar.forEach((x) => {
    total += x;
  });
  return total;
}

console.log(aVerySum(arr));