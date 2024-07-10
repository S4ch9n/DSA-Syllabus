function toggleCase(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i);
        if (ascii < 97) {
            //this is a capital letter
            ascii += 32;
        }
        else {
            // this is a smaller letter 
            ascii -= 32;
        }
        ans += String.fromCharCode(ascii);
    }
    return ans;
}
console.log(toggleCase('aBcDe'));
