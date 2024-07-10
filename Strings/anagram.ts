function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  let freqS = new Array(26);
  let freqT = new Array(26);
  
  for (let i = 0; i < 26; i++) {
    freqS[i] = 0;
    freqT[i] = 0;
  }

  for (let i = 0; i < s.length; i++) {
    let idxS = s.charCodeAt(i) - 97;
    let idxT = t.charCodeAt(i) - 97;

    freqS[idxS]++;
    freqT[idxT]++;
  }

  for (let i = 0; i < 26; i++) {
    if (freqS[i] !== freqT[i]) return false;
  }

  return true;
}

let s = "anagram", t = "nagaram";
console.log(isAnagram(s, t)); // Should return true
