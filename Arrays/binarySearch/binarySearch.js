function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
    }
    return -1;
}
var arr = [10, 20, 30, 40, 50, 60];
var ans = binarySearch(arr, 30);
console.log(ans);
// Output : 2
