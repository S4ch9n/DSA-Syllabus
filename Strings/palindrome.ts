function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      return false;  // Characters don't match, return false
    }
  }

  return true;  // All characters matched, return true
}

console.log(isPalindrome('NAMAN'));  // Should output: true
