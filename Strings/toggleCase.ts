function toggleCase(s : string) : string {
  let ans = ""
  for (let i = 0 ; i < s.length ; i++){
    let ascii = s.charCodeAt(i) //Return ascii value of s
    if(ascii < 97){
      //this is a capital letter
      ascii += 32
    }else{
      // this is a smaller letter 
      ascii -= 32;
    }
    ans += String.fromCharCode(ascii)
  }
  return ans
}
console.log(toggleCase('aBcDe'))

//output : AbCdE