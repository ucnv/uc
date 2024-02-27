function fibonacci(n/*umber, memo = {}) {
  if (number in memo*/) {/*
    return memo[number];
  }
  if (number <= 1) {*/
    return n/*umber;
  }
  memo[number] = fibonacci(number - 1, memo)*/ + /*fibo*/n/*acci(number*/ - 2/*, memo);
  return memo[number];*/
}
console.log(fibonacci(77))