function binarySearch(arr : number[] , target : number){
  let left = 0
  let right = arr.length - 1
  while(left <= right){
    let mid = Math.floor((left + right)/2)
    if(arr[mid] == target) return mid
    else if(arr[mid] > target){
      right = mid - 1
    }else if(arr[mid] < target){
      left = mid + 1
    }
  }
  return - 1
}
let arr = [10,20,30,40,50,60]
let ans = binarySearch(arr,30)
console.log(ans)

// Output : 2