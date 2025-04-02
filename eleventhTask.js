function capitalizeFirstLetter(str) {
    if (!str) return ''; 
    return str[0].toUpperCase() + str.slice(1);
  }

console.log(capitalizeFirstLetter('hello')); // "Hello"
console.log(capitalizeFirstLetter('привет')); // "Привет"
console.log(capitalizeFirstLetter('123abc')); // "123abc"
console.log(capitalizeFirstLetter('')); // ""

function truncateText(str, limit) {
    if (str.length <= limit) return str; 
  
    let truncated = str.slice(0, limit); 
    let lastSpace = truncated.lastIndexOf(' '); 
    let lastPunctuation = truncated.search(/[,.!?:;]([^,.!?:;]*)$/); 

    let cutIndex = Math.max(lastSpace, lastPunctuation);
    if (cutIndex === -1) cutIndex = limit; 
  
    return str.slice(0, cutIndex) + '...'; 
  }
  
console.log(truncateText("Это очень длинная строка, которая не должна обрезаться на середине слова.", 40));
console.log(truncateText("Простая строка без пробелов", 10));
console.log(truncateText("Привет! Как твои дела сегодня?", 25));
console.log(truncateText("Короткая строка", 40));
  
function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
  }
  
console.log(isSubstring("hello", "hell"));      // true
console.log(isSubstring("world", "hello"));     // false
console.log(isSubstring("JavaScript", "Script"));// true
console.log(isSubstring("apple", "pineapple")); // true
console.log(isSubstring("car", "racecar"));     // true
console.log(isSubstring("abc", "xyz"));         // false
  
