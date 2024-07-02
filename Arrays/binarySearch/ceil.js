function findCeil(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    var ans = -1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return arr[mid];
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else if (arr[mid] > target) {
            ans = arr[mid]; // if arr[mid] is bigger, it can be a potential ceil
            right = mid - 1;
        }
    }
    return ans;
}
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var target = 85;
console.log(findCeil(arr, target)); // Output: 20
