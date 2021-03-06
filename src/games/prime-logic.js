import runGame from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getAnswers = () => {
  const askQuestion = getRandomInt(2, 100);
  const referenceAnswer = isPrime(askQuestion);
  return [askQuestion, referenceAnswer];
};
const guessPrimeNums = () => runGame(gameTask, getAnswers);
export default guessPrimeNums;
