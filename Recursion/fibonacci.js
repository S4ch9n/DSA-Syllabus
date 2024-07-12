function fibonacci(n) {
    // base case
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    var f1 = fibonacci(n - 1);
    var f2 = fibonacci(n - 2);
    return f1 + f2;
}
console.log(fibonacci(8));
