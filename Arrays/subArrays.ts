function printAllSubarray(arr : number[]) : void {
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = i ; j < arr.length ; j++){
      let s = ""
      for(let k = i ; k <= j ; k++){
        s += arr[k] + " "
      }
      console.log(s)
    }
  }
}
printAllSubarray([5,6,2,3])


// output
// 5 
// 5 6 
// 5 6 2 
// 5 6 2 3 
// 6 
// 6 2 
// 6 2 3 
// 2 
// 2 3 
// 3 