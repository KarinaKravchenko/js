function mySlice(arr, start = 0, end = arr.length) {
    const result = [];
    if (start < 0) start = Math.max(arr.length + start, 0);
    if (end < 0) end = Math.max(arr.length + end, 0);
  
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
  
    return result;
  }

  function myIndexOf(arr, item, from = 0) {
    if (from < 0) from = Math.max(arr.length + from, 0);
  
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1; 
  }

  function myIncludes(arr, item, from = 0) {
    if (from < 0) from = Math.max(arr.length + from, 0);
  
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return true; 
      }
    }
    return false; 
  }

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(mySlice(arr, 2, 5)); // [3, 4, 5]
console.log(myIndexOf(arr, 4));  // 3
console.log(myIncludes(arr, 4)); // true
console.log(myIndexOf(arr, 8));  // -1
console.log(myIncludes(arr, 8)); // false
