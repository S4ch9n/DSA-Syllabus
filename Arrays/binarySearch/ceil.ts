function findCeil(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      ans = arr[mid]; // if arr[mid] is bigger, it can be a potential ceil
      right = mid - 1;
    }
  }
  
  return ans;
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let target = 85;
console.log(findCeil(arr, target)); // Output: 20
