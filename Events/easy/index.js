// for user input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const events = require('node:events');
const { EventEmitter } = events;

const spaceBook = new EventEmitter();

spaceBook.on('userLogIn', (name) => {
  console.log(`Welcome ${name}!`);
});

const prompt = () => {
  readline.question(
    'Welcome to SpaceBook!\nLogin using Username > ',
    (answer) => {
      if (answer.toLowerCase() === 'logout') {
        readline.close();
        return;
      }

      spaceBook.emit('userLogIn', answer);

      prompt();
    },
  );
};

prompt();
