function getMaxElement(arr) {
    var maxEle = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxEle) {
            maxEle = arr[i];
        }
    }
    return maxEle;
}
function barChart(arr) {
    var height = getMaxElement(arr);
    var width = arr.length;
    for (var currFloor = height; currFloor >= 1; currFloor--) {
        var s = "";
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= currFloor)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
    }
}
barChart([7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7]);
// output
// *             *
// **           **
// ***         ***
// ****       ****
// *****     *****
// ******   ******
// ******* *******
