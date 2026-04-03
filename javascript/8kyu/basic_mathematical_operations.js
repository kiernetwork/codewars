const basicOp = (op, a, b) => ({
  '+': a + b,
  '-': a - b,
  '*': a * b,
  '/': a / b
}[op]);