function f(k) {
  let n = 0
  if (k > .5) {
    n += 1 
//  } else {
    n -= 1
  }
  return n
}
const v = f(Math.random())