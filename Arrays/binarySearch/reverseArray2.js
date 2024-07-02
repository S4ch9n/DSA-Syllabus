function reverseArrayInRange(arr, l, r) {
    while (l < r) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
var arr = [10, 20, 30, 40, 50, 60, 70];
console.log(arr); // Original array
reverseArrayInRange(arr, 1, 4);
console.log(arr); // Array after reversing the range from index 1 to 4
