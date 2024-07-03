function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target)
            return i;
    }
    return -1;
}
var arr = [1, 2, 3, 4, 5, 6, 7,];
var ans = linearSearch(arr, 3);
console.log(ans);
// Output : the index of the target element is : 3
