//jshint esversion:6

let questions = [
    {
        question: "What's my name: ",
        answer: "Arigbede Omobolaji"
    },
    {
        question: "What's my christian name: ",
        answer: "paul"
    },
    {
        question: "What's my elder sister's name : ",
        answer: "Arigbede Comfort",
    },
    {
        question: "Where's my state of origin: ",
        answer: "Osun State"
    },
];

const startGame = document.querySelector(".btn");
const quizContainer = document.querySelector(".quiz-container");

startGame.addEventListener("click", ()=>{
    quizContainer.classList.add("show-game");
});



