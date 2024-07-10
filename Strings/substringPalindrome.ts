function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) return false;
      left++;
      right--;
  }
  return true;  // All characters matched, return true
}
function substringPalindrome(s : string) : void{
  for(let i = 0 ; i < s.length - 1 ; i++){
    for(let j = i ; j < s.length ; j++){
      let substr = s.substring(i,j+1)
      if(isPalindrome(substr)){
        console.log(substr)
      }
    }
  }
}
let s = 'bcbdpqrq'
substringPalindrome(s)

// output : 
// bcb
// c
// b
// d
// p
// q
// qrq
// r