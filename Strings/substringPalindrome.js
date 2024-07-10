function isPalindrome(s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right])
            return false;
        left++;
        right--;
    }
    return true; // All characters matched, return true
}
function substringPalindrome(s) {
    for (var i = 0; i < s.length - 1; i++) {
        for (var j = i; j < s.length; j++) {
            var substr = s.substring(i, j + 1);
            if (isPalindrome(substr)) {
                console.log(substr);
            }
        }
    }
}
var s = 'bcbdpqrq';
substringPalindrome(s);
// output : 
// bcb
// c
// b
// d
// p
// q
// qrq
// r
