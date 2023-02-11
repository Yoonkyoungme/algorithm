// 선택 정렬
function selectionSort(array) {
  let indexMin;
  for (let i = 0; i < array.length - 1; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    [array[i], array[indexMin]] = [array[indexMin], array[i]];
  }
  return array;
}
console.log("선택 정렬: ", selectionSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]));

// 삽입 정렬
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    let prev = i - 1;

    while (prev >= 0 && array[prev] > value) {
      array[prev + 1] = array[prev];
      prev -= 1;
    }
    array[prev + 1] = value;
  }
  return array;
}
console.log("삽입 정렬: ", insertionSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]));

// 퀵 정렬
function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  const leftQickSort = quickSort(left);
  const rightQickSort = quickSort(right);

  return [...leftQickSort, pivot, ...rightQickSort];
}
console.log("퀵 정렬: ", quickSort([6, 3, 5, 1, 9, 4, 8, 2, 7]));

// 계수 정렬
function countingSort(array) {
  const max = Math.max(...array);
  const countArray = new Array(max + 1).fill(0);
  const result = [];

  for (let i = 0; i < array.length; i++) {
    countArray[array[i]] += 1;
  }

  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i]) {
      for (let j = 0; j < countArray[i]; j++) result.push(i);
    }
  }
  return result;
}
console.log("계수 정렬: ", countingSort([4, 4, 3, 5, 1, 2, 0, 8, 3, 6]));
