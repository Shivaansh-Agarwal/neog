// NEOG Mark1
const readlineSync = require('readline-sync');
const chalk = require('chalk');

let allScores = [];

function getQuestions(){
  let questionsList = [{
    "ques": "What's his age? ",
    "ans": "22"
  },{
    "ques": "Where was he born? ",
    "ans": "Aligarh"
  },{
    "ques": "Where does he work? ",
    "ans": "Hyderabad"
  },{
    "ques": "What the last TV-Series he watched? ",
    "ans": "The Queen's Gambit"
  },{
    "ques": "In which city did he attend his college? ",
    "ans": "Mathura"
  }];
  return questionsList;
}


function isAnswerCorrect(userAnswer, answer){
  return answer.toLowerCase() === userAnswer.toLowerCase();
}


const playGame = function(){
  const questions = getQuestions();
  let currScore=0;

  for(let i=0; i<questions.length; i++){
    let userAnswer = readlineSync.question(chalk.cyan(questions[i].ques));
    let answer = questions[i].ans;
    if(isAnswerCorrect(userAnswer,answer)){
      console.log(chalk.green("Congratulations! That's Correct."));
      currScore++;
    } else {
      console.log(chalk.red("Sorry! That's Incorrect"));
      break;
    }
  }

  allScores.push(currScore);
  let bestScore = allScores.sort().reverse()[0];
  console.log(chalk.whiteBright.bgYellow.bold(`Your score is ${currScore} and best score is ${bestScore}\n`));
  console.log("----------THANKS FOR PLAYING----------\n\n");
};


while(true){
  if(readlineSync.keyInYN(chalk.bgBlue('Wanna play this game?'))){
    let userName = readlineSync.question(chalk.yellow("Hi there, What's your name: "));
    console.log(`\nWelcome ${userName} Let's check how well you know Shivaansh?`);
    playGame();
  } else {
    break;
  }
}