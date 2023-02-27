NUM_TRIALS = 10000;

function drawOneCard() {
  const suits = ["H", "C", "D", "H"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let oneSuit = Math.floor(Math.random() * suits.length);
  let oneNumber = Math.floor(Math.random() * numbers.length);
  let drawnCard = suits[oneSuit] + " " + numbers[oneNumber];
  return drawnCard;
}

function drawFiveCards() {
  let cards = [];
  while (cards.length < 5) {
    let newCard = drawOneCard();
    if (!cards.includes(newCard)) {
      cards.push(newCard);
    }
  }
  return cards;
}
const hand = drawFiveCards();
console.log(hand.join("\n"));

// Define a function to check if a hand is a flush

// creates a variabe that .maps through every element of the hand and implements the below function

//  function is to split the elements in the array by a space and pulls the first element which is the suits

// Uses the every() method to check if every element in the suits array is equal to the first element of the array.

function isFlush(hand) {
  const suits = hand.map((card) => card.split(" ")[0]);

  if (suits.every((suit) => suit === suits[0])) {
    flushCount++;
    return "You have a flush!";
  } else {
    return "";
  }
}

console.log(isFlush(hand));

// Define a function for three of a kind

// creates a variabe that .maps through every element of the hand and implements the below function

//  function is to split the elements in the array by a space and pulls the second element which is the ranks

// Uses a for loop which filters through the array and checks if the rank pulled matches the previous rank. If the cout is equal to 3 it should retutn 3 of a kind

function isThreeOfAKind(hand) {
  const ranks = hand.map((card) => card.split(" ")[1]);

  for (let i = 0; i < ranks.length; i++) {
    const count = ranks.filter((rank) => rank === ranks[i]).length;
    if (count === 3) {
      threeCount++;
      return "You have three of a kind!";
    }
  }
  return "";
}

console.log(isThreeOfAKind(hand));

// Define a function for four of a kind

// Same method as above expect count must equal to 4

function isFourOfAKind(hand) {
  const ranks = hand.map((card) => card.split(" ")[1]);

  for (let i = 0; i < ranks.length; i++) {
    const count = ranks.filter((rank) => rank === ranks[i]).length;
    if (count === 4) {
      fourCount++;
      return "You have four of a kind!";
    }
  }

  return "";
}

console.log(isFourOfAKind(hand));

// Define function for a Full House

// creates a variabe that .maps through every element of the hand and implements the below function

//  function is to split the elements in the array by a space and pulls the second element which is the ranks

// Uses a for loop which filters through the array and checks if the rank pulled matches the previous rank. If the cout is equal to 3 then it should run the nested to repeat the process however ranks must not equal previous ranks and equal to 2

function fullHouse(hand) {
  const ranks = hand.map((card) => card.split(" ")[1]);

  for (let i = 0; i < ranks.length; i++) {
    const count = ranks.filter((rank) => rank === ranks[i]).length;
    if (count === 3) {
      for (let j = 0; j < ranks.length; j++) {
        if (j !== i && ranks[j] === ranks[i] && j === 2) {
          houseCount++;
          return "You have a full house";
        }
      }
    }
  }

  return "";
}

console.log(fullHouse(hand));

// const lastElement = numbers.pop();

// Define function for a Straight

// loops through the array and compares each index to the previous one to check if its one greater, it not equal returns empty string, else prints you have a straight

function isStraight(hand) {
  for (let i = 1; i < hand.length; i++) {
    if (hand[i] !== hand[i - 1] + 1) {
      return "";
    }
  }
  straightCount++;
  return "You have a Straight!";
}

console.log(isStraight(hand));

// Define function for a Straight Flush

// creates a variabe that .maps through every element of the hand and implements the below function

//  function is to split the elements in the array by a space and pulls the first element which is the suits

// uses the every method to check that current suit matches the first suit, once this returns true the for loop will run

// loops through the array and compares each index to the previous one to check if its one greater, it not equal returns empty string, else prints you have a straight flush

function isStraightFlush(hand) {
  const suits = hand.map(function (card) {
    return card.split(" ")[0];
  });
  if (
    suits.every(function (suit) {
      return suit === suits[0];
    })
  )
    for (let i = 1; i < hand.length; i++) {
      if (hand[i] === hand[i - 1] + 1) {
        straightFlushCount++;
        return "You have a Straight Flush!";
      }
    }
  else return "";
}

console.log(isStraightFlush(hand));

// print probability of getting each hand
// use varibale to delare value of count for each hand
// add ++ increment to each hand to add one to the hand count each time the functioin returns true
// use for loop to loop through NUM TRIALS variable and print number of times hand is drawn
// console log the hand count divided by number of NUM TRIALS

let flushCount = 0;
let threeCount = 0;
let fourCount = 0;
let houseCount = 0;
let straightCount = 0;
let straightFlushCount = 0;

for (let i = 0; i < NUM_TRIALS; i++) {
  const hand = drawFiveCards();
  isFlush(hand);
}

for (let i = 0; i < NUM_TRIALS; i++) {
  const hand = drawFiveCards();
  isThreeOfAKind(hand);
}

for (let i = 0; i < NUM_TRIALS; i++) {
  const hand = drawFiveCards();
  isFourOfAKind(hand);
}

for (let i = 0; i < NUM_TRIALS; i++) {
  const hand = drawFiveCards();
  fullHouse(hand);
}

for (let i = 0; i < NUM_TRIALS; i++) {
  const hand = drawFiveCards();
  isStraight(hand);
}

for (let i = 0; i < NUM_TRIALS; i++) {
  const hand = drawFiveCards();
  isStraightFlush(hand);
}

console.log(
  `The empirical probability of getting a Flush is: ${
    (flushCount / NUM_TRIALS) * 100
  }%`
);

console.log(
  `The empirical probability of getting Three of a Kind is: ${
    (threeCount / NUM_TRIALS) * 100
  }%`
);

console.log(
  `The empirical probability of getting Four of a Kind is: ${
    (fourCount / NUM_TRIALS) * 100
  }%`
);

console.log(
  `The empirical probability of getting a Full House is: ${
    (houseCount / NUM_TRIALS) * 100
  }%`
);

console.log(
  `The empirical probability of getting a Straight is: ${
    (straightCount / NUM_TRIALS) * 100
  }%`
);

console.log(
  `The empirical probability of getting a Straight Flush is: ${
    (straightFlushCount / NUM_TRIALS) * 100
  }%`
);
