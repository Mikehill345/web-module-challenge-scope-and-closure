// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2? 
 * counter 1 count is inside of the function scope and it's function scoped so it can only be acessed in the function where as counter 2 var count is global scoped so it can be accessed anywhere.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter 1 uses closure because of the return function inside of the function
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter 1 would be better for keeping track of the count where as counter 2 would be better for if you want to use that count in other functions or places.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
return function random(){
  return Math.floor(Math.random * 2) + 1;
}


let baseballGame = inning()

console.log(baseballGame());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the
 final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(innings, numOfInnings){
let homeScore = 0;
let awayScore = 0;
for (let i = 0; i < numOfInnings; i++) {
    let inningScore = innings();
    homeScore += inningScore.Home;
    awayScore += inningScore.Away;
    
  }
  return{ Home: homeScore,
    Away: awayScore};
  }


console.log(finalScore(inning, 9))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


// function scoreboard(getInningScore, inning, numOfInnings) {
//   let inningScore = inning();
//   let score = [];
//   let finalScore = getInningScore(inning, numOfInnings);
//   console.log(finalScore.Home)
// // return `1st inning: ${inningScore.Home} - ${inningScore.Away}`
//   for (let i = 0; i < numOfInnings; i++) {
//    score.push (`${i+1}st inning: ${inningScore.Home} - ${inningScore.Away}`);
//   }
// score.push (`Final Score: ${getInningScore.Home} - ${getInningScore.Away}`);
// return score;
// }


// console.log(scoreboard(finalScore, baseballGame, 9))
