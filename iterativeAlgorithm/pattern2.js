function pattern2(n) {
    for (var i = 5; i >= 1; i--) {
        var stars = i;
        var spaces = n - stars;
        var currRow = "";
        //ans for currRow
        for (var j = 1; j <= spaces; j++) {
            currRow += " ";
        }
        for (var j = 1; j <= stars; j++) {
            currRow += "*";
        }
        console.log(currRow);
    }
}
pattern2(7);
// output
// *****
// ****
//  ***
//   **
//    *
