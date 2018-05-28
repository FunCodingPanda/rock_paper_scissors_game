const argv = require('yargs').argv

class Player {
  constructor(name) {
    this.name = name;
    this.choice = null;
  }

  makeChoice(choice) {
    this.choice = choice;
    console.log(`${this.name} chose ${this.choice}.`);
  }
}

class You extends Player {
  constructor() {
    super('You');
  }

  makeChoice() {
    super.makeChoice(argv.move);
  }
}

class Computer extends Player {
  constructor() {
    super('Computer');
  }

  makeChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    super.makeChoice(choices[randomNumber]);
  }
}

const win = (player) => {
  console.log(`~${player.name} won!~`);
}

const draw = () => {
  console.log('~It\'s a draw!~');
}

const whoWon = (player1, player2) => {
  if (player1.choice === player2.choice) {
    draw();
  } else if (player1.choice === 'rock') {
    if (player2.choice === 'scissors') {
      win(player1);
    } else {
      win(player2);
    }
  } else if (player1.choice === 'scissors') {
    if (player2.choice === 'paper') {
      win(player1);
    } else {
      win(player2);
    }
  } else if (player1.choice === 'paper') {
    if (player2.choice === 'rock') {
      win(player1);
    } else {
      win(player2);
    }
  }
}

const player1 = new You();
const player2 = new Computer();
player1.makeChoice();
player2.makeChoice();
whoWon(player1, player2);
