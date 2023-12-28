let i = setInterval(() => clearInterval(i), 0)

let a, b, c
a = setInterval(() => {
  clearInterval(b)
  b = setInterval(() => {
    clearInterval(a)
  }, 0)
}, 0)