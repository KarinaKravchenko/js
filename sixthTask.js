function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function guessNumber() {
    const secretNumber = getRandomNumber();
    let lowerBound = 1;
    let upperBound = 100;
    let guess;
    let attempts = 0;
  
    console.log(`Компьютер 1 загадал число: ${secretNumber}\n`);

    while (true) {
      guess = Math.floor((lowerBound + upperBound) / 2);
      attempts++;
  
      console.log(`Компьютер 2: Пробую число ${guess}.`);
  
      if (guess === secretNumber) {
        console.log(`Компьютер 1: Угадал! Число было ${secretNumber}.`);
        break;
      } else if (guess < secretNumber) {
        console.log("Компьютер 1: Больше.");
        lowerBound = guess + 1; 
      } else {
        console.log("Компьютер 1: Меньше.");
        upperBound = guess - 1; 
      }
    }
  
    console.log(`Компьютер 2 угадал число за ${attempts} попыток.`);
  }
  
  guessNumber();
  
