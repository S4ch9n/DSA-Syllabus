function sortArray01(arr) {
    var i = 0;
    var j = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            //swap arr[i] arr[j]
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
        }
        else if (arr[i] == 1) {
            i++;
        }
    }
}
var arr = [0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
sortArray01(arr);
console.log(arr);
