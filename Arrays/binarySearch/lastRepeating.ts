function findLastOccurance( arr : number[] , target : number ) : number {
    let l = 0
    let r = arr.length - 1
    let ans = -1
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid]==target){
            ans = mid 
            l = mid + 1
        }else if(arr[mid] < target){
            l = mid + 1
        }else if(arr[mid] > target){
            r = mid - 1
        }
    }
    return ans
}
let arr = [1,1,1,1,2,2,2,3,3,3,4,4,5]
let target = 2
console.log(findLastOccurance(arr,target))