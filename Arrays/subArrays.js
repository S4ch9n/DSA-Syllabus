function printAllSubarray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            var s = "";
            for (var k = i; k <= j; k++) {
                s += arr[k] + " ";
            }
            console.log(s);
        }
    }
}
printAllSubarray([5, 6, 2, 3]);
