const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error, please choose beetwen: rock, paper or scissors');
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() *3);
  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 3:
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game was a tie!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper') {
      return "Sorry, Computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

 if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return "Sorry, Computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

 if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return "Sorry, Computer won!";
  } else {
    return "Congratulations, you won!";
  }
 }
};

const playGame = () => {
  const userChoice = getUserChoice ('rock', 'paper', 'scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  // console.log('You threw: ' + ${userChoice});
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame()

