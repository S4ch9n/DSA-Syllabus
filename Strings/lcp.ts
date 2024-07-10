function longestCommonPrefix(arr: string[]): string {
  let ans = "";
  for(let l = 0 ; l < arr[0].length ; l++){
      for(let i = 1 ; i < arr.length ; i ++){
          if(arr[i].length <= 1 || arr[0][l] != arr[i][l]) return ans;
      }
      ans += arr[0][l]
  }
  return ans;
};
let arr = ["flower","flow","flight"]
console.log(longestCommonPrefix(arr))

// output : fs 