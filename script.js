const jokes = [
  {
    line1: "Knock knock",

    line2: "Who's there?",

    line3: "Lettuce",

    line4: "Lettuce who?",

    line5: "Lettuce in, it's cold out here!",
  },
  {
    line1: "Knock knock",

    line2: "Who's there?",

    line3: "Hal",

    line4: "Hal who?",

    line5: "Hal will you know if you don't open the door?",
  },
  {
    line1: "Knock knock",

    line2: "Who's there?",

    line3: "Alice",

    line4: "Alice who?",

    line5: "Alice fair in love and war.",
  },
  {
    line1: "Knock knock",

    line2: "Who's there?",

    line3: "Says",

    line4: "Says who?",

    line5: "Says me!",
  },
  {
    line1: "Knock knock",

    line2: "Who's there?",

    line3: "Water",

    line4: "Water who?",

    line5:
      "Water you doing telling jokes right now? Don't you have things to do?",
  },
];

let step = 0;
let selectedJoke;
let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", () => {
  // If it's the first click, pick a new random joke
  if (step === 0) {
    const randNum = Math.floor(Math.random() * jokes.length);
    selectedJoke = jokes[randNum];
  }

  switch (step) {
    case 0:
      jokeText.textContent = selectedJoke.line1;
      jokeBtn.innerHTML = "Next";
      break;
    case 1:
      jokeText.textContent = selectedJoke.line2;
      jokeBtn.innerHTML = "Next";
      break;
    case 2:
      jokeText.textContent = selectedJoke.line3;
      jokeBtn.innerHTML = "Next";
      break;
    case 3:
      jokeText.textContent = selectedJoke.line4;
      jokeBtn.innerHTML = "Next";
      break;
    case 4:
      jokeText.textContent = selectedJoke.line5;
      jokeBtn.innerHTML = "Haha! Click for another one";
      step = -1;
      break;
    default:
      jokeBtn.innerHTML = "Knock Knock!";
      break;
  }

  step++;
});
