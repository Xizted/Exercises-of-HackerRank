let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(ar) {
  let isPositive = 0;
  let isNegative = 0;
  let isZero = 0;
  let lengthArr = arr.length;

  ar.forEach((element) => {
    if (element > 0) {
      isPositive++;
    } else if (element < 0) {
      isNegative++;
    } else {
      isZero++;
    }
  });

  console.log(parseFloat((isPositive / lengthArr).toFixed(6)));
  console.log(parseFloat((isNegative / lengthArr).toFixed(6)));
  console.log(parseFloat((isZero / lengthArr).toFixed(6)));
}
