// Recursive code
function func(n) {
    if (n == 0)
        return;
    console.log(n);
    func(n - 1);
    console.log(n);
}
func(5);
// output
// 5
// 4
// 3
// 2
// 1
// 1
// 2
// 3
// 4
// 5
