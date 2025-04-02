function createLogger() {
    let logs = []; 
  
    return {
      log(message) {
        logs.push(message); 
      },
      getLogs() {
        return logs.slice(); 
      }
    };
  }

  const logger = createLogger();
  
  logger.log("Первое сообщение");
  logger.log("Второе сообщение");
  
  console.log(logger.getLogs()); // ["Первое сообщение", "Второе сообщение"]
  
  // Попытка получить доступ к logs напрямую приведет к ошибке
  // console.log(logger.logs); // undefined
  
function createRandomGenerator(min, max) {
    return function () {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  }

  const randomFrom1To10 = createRandomGenerator(1, 10);
  console.log(randomFrom1To10()); 
  console.log(randomFrom1To10()); 
  
  const randomFrom50To100 = createRandomGenerator(50, 100);
  console.log(randomFrom50To100()); 
  console.log(randomFrom50To100()); 
  
