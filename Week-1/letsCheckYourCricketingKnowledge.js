// NEOG Mark2

// Basic CLI Sports Quiz App
const readLineSync = require('readline-sync');
const chalk = require('chalk');

let allUsers = [];

function getQuestionBank(){
  let questions = [
    {
      "ques": "Which team won the IPL 2020 Trophy?",
      "ans": "Mumbai Indians", 
      "options":["Sunrisers Hyderabad","Mumbai Indians","Chennai Super Kings", "Royal Challengers Bangalore"]
    },
    {
      "ques": "When was the last 50 Over World Cup held?", 
      "ans":"2019", 
      "options":["2019", "2018", "2017", "2016"]
    },
    {
      "ques":"Which cricketer has scored the most runs in ODI Cricket?", 
      "ans":"Sachin Tendulkar", 
      "options":["Ricky Ponting","Don Bradman", "Sachin Tendulkar", "Kumar Sangakkara "]
    },
    {
      "ques":"Which Indian batsman is named 'Gabbar'?", 
      "ans":"Shikhar Dhawan", 
      "options":["Shikhar Dhawan","MS Dhoni", "Virat Kohli", "Rohit Sharma"]
    },
    {
      "ques":"Who was the captain of Indian Cricket team post Independence?", 
      "ans":"Lala Amarnath", 
      "options":["Kapil Dev","Lala Amarnath", "Mansoor Ali Khan Pataudi", "Vijay Hazare"]
    },
    {
      "ques":"Who among the following was the first to play 200 IPL Matches?", 
      "ans":"MS Dhoni", 
      "options":["MS Dhoni","Suresh Raina", "Rohit Sharma", "Virat Kohli"]
    },
    {
      "ques": "Who won the first World Cup, 1975?",
      "ans": "West Indies",
      "options":["Australia", "England", "West Indies", "East Africa"]
    },
    {
      "ques":"How many times Chennai Super Kings won the IPL?",
      "ans": "3",
      "options":["3","4","2","1"]
    },
    {
      "ques": "Who is the first batsman to cross 10000 runs in Tests?",
      "ans": "Sunil Gavaskar",
      "options": ["Sachin Tendulkar", "Sunil Gavaskar", "Ricky Ponting", "Sanath Jaisurya"]
    },
    {
      "ques": "Which national team is nicknamed “The Proteas” or “The Springboks”",
      "ans": "South Africa",
      "options": ["India", "Pakistan", "South Africa", "New Zealand"]
    },
    {
      "ques": "Which country has played the maximum number of one day matches?",
      "ans": "Australia",
      "options": ["England", "Australia", "West Indies", "India"]
    },
    {
      "ques": "Who has the credit of captaining India to her first overseas victory?",
      "ans": "Mansoor Ali Khan Pataudi",
      "options": ["Sunil Gavaskar", "Kapil Dev", "MS Dhoni", "Saurav Ganguly"]
    },
    {
      "ques": "Who does the best batting average in a test career belong?",
      "ans": "Don Bradman",
      "options": ["Sachin Tendulkar", "Ricky Pointing", "Don Bradman", "Sanath Jaisurya"]
    },
    {
      "ques": "Who is the only batsman to have hit a century in each innings of a Test thrice?",
      "ans": "Sunil Gavaskar",
      "options": ["Sunil Gavaskar", "Rahul Dravid", "Virat Kohli", "Sachin Tendulkar"]
    },
    {
      "ques": "Which Australian city has a cricket ground called the Oval?",
      "ans": "Sydney",
      "options": ["Sydney", "Melbourne", "Perth", "Adelaide"]
    }
  ];
  return questions;
};

function customSort(user1, user2){
  // Method for sorting array of objects
  if(user1.score < user2.score)
    return -1;
  else if(user1.score > user2.score)
    return 1;
  else
    return 0;
}

function startQuiz(userName){
  const questions = getQuestionBank();
  let currScore=0;
  let level=1;

  for(let i=0; i<questions.length; i++){
    let userAns = readLineSync.keyInSelect(questions[i].options, chalk.magenta(questions[i].ques));
    console.log("Your Answer: "+ questions[i].options[userAns]);
    console.log("Correct Answer: "+ questions[i].ans);
    if(questions[i].ans===questions[i].options[userAns]){
      console.log(chalk.green("Congratulations! That's Correct."));
      currScore++;
      if(currScore%3==0){
        level++;
        console.log(chalk.bgCyan(`Congrats! You've reached level ${level} `));
      }
    } else {
      console.log(chalk.bgRed("Sorry! That's Incorrect"));
      break;
    }
  }

  let userObj = {"userName": userName, "score": currScore};
  allUsers.push(userObj);
  allUsers.sort(customSort).reverse();
  let bestScore = allUsers[0].score;
  let bestScoreUser = allUsers[0].userName;
  if(userName===bestScoreUser){
    console.log(chalk.whiteBright.bgYellow.bold(`Your score is ${currScore} and this is the best score till now!!\n`));
  } else {
    console.log(chalk.whiteBright.bgYellow.bold(`Your score is ${currScore} and ${bestScoreUser} is top scorer with score: ${bestScore}\n`));
  }
  console.log("----------THANKS FOR PLAYING----------\n\n");
};

while(true){
  if(readLineSync.keyInYN(chalk.bgBlue('Wanna play this game?'))){
    let userName = readLineSync.question(chalk.yellow("Hi there, What's your name: "));
    console.log(`\nWelcome ${userName} Let's check your understanding of cricket?`);
    startQuiz(userName);
  } else {
    break;
  }
}