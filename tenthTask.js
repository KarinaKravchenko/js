// Первое
function sumNumericFields(obj) {
    return Object.values(obj)
      .filter(value => typeof value === 'number') 
      .reduce((sum, num) => sum + num, 0); 
  }
  

const data1 = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
console.log(sumNumericFields(data1)); // 31

// Задача со звездочкой 
function sortedNumericFields(obj) {
    return Object.entries(obj)
      .filter(([key, value]) => typeof value === 'number')
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]); // Изменил деструктуризацию
  }
  
const data2 = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
console.log(sortedNumericFields(data2)); // ['likes', 'projects', 'friends']
  
