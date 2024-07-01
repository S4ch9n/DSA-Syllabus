function getMaxElement(arr : number[]) : number {
  let maxEle = -Infinity;
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > maxEle){
      maxEle = arr[i]
    }
  }
  return maxEle
}
function barChart(arr : number[]){
  let height = getMaxElement(arr);
  let width = arr.length ;
  for(let currFloor = height ; currFloor >= 1 ; currFloor--){
    let s = ""
    for(let i= 0 ; i < arr.length ; i++){
      if(arr[i] >= currFloor) s+="*"
      else s+=" "
    }
    console.log(s)
  }
}
barChart([7,6,5,4,3,2,1,0,1,2,3,4,5,6,7])

// output
// *             *
// **           **
// ***         ***
// ****       ****
// *****     *****
// ******   ******
// ******* *******