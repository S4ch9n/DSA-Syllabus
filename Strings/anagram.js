function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var freqS = new Array(26);
    var freqT = new Array(26);
    for (var i = 0; i < 26; i++) {
        freqS[i] = 0;
        freqT[i] = 0;
    }
    for (var i = 0; i < s.length; i++) {
        var idxS = s.charCodeAt(i) - 97;
        var idxT = t.charCodeAt(i) - 97;
        freqS[idxS]++;
        freqT[idxT]++;
    }
    for (var i = 0; i < 26; i++) {
        if (freqS[i] !== freqT[i])
            return false;
    }
    return true;
}
var s = "anagram", t = "nagaram";
console.log(isAnagram(s, t)); // Should return true
