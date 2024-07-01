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