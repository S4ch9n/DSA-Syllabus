function sortArray012(arr: number[]) {
  let i = 0;
  let j = 0;
  let k = arr.length - 1; // should be arr.length - 1

  while (i <= k) { // while (i <= k)
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    } else if (arr[i] == 1) {
      i++;
    } else if (arr[i] == 2) {
      let temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp;
      k--; // decrement k
    }
  }
  return arr;
}

let arr = [0, 0, 1, 0, 2, 1, 0, 1, 2, 2, 0, 1];
sortArray012(arr);
console.log(arr);
