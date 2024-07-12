function fibonacci(n: number): number {
  // base case
  if (n == 0) return 0;
  if (n == 1) return 1;
  
  let f1 = fibonacci(n - 1);
  let f2 = fibonacci(n - 2);
  return f1 + f2;
}

console.log(fibonacci(8));
