const findFactorial = (number) => {
  if (number === 1) {
    return number;
  }
  return number * findFactorial(number - 1);
};

console.log(findFactorial(10));
