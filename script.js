const facts = [
  "Iron Man debuted in Tales of Suspense #39 in 1963.",
  "Tony Stark built the first suit while held captive in a cave.",
  "Jarvis, the AI, is named after the Stark family butler.",
  "The arc reactor was designed to save Tony’s life and power the suit.",
  "Iron Man has over 50 different suits in the comics.",
  "In the 1990s, Iron Man starred in his own animated series, which introduced many fans to the character.",
  "The 'Armor Wars' storyline in the 90s showcased Tony Stark's battle against those who used his technology without permission.",
  "Iron Man was a founding member of the Avengers in the comics, which gained significant popularity in the 90s.",
  "The 'Iron Man' comic series in the 90s explored Tony Stark's struggles with alcoholism, a significant character development.",
  "In 1994, Iron Man was featured in the 'Spider-Man: The Animated Series', further solidifying his place in popular culture.",
];

function generateFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[randomIndex];
}

function secretPage() {
  alert("You’ve found the secret! Suit up and save the world!");
}

const flashcards = document.querySelectorAll(".flashcard");
let currentIndex = 0;

setInterval(() => {
  if (currentIndex < flashcards.length) {
    flashcards[currentIndex].classList.add("flipped");
    currentIndex++;
  } else {
    currentIndex = 0;
    flashcards.forEach((card) => card.classList.remove("flipped"));
  }
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000);
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = event.target.href;
    document.getElementById("loading-screen").style.display = "flex";
    document.getElementById("main-content").style.display = "none";

    setTimeout(() => {
      window.location.href = href;
    }, 2000);
  });
});
