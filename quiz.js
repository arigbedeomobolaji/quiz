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

let correct = 0;
let answer;
let question;
let correctAnswer;
for(let  i = 0; i < questions.length; i++){
    question = questions[i].question;
    correctAnswer = questions[i].answer;
    answer = prompt(question);
    if(correctAnswer.toLowerCase() === answer.toLowerCase()){
        correct+= 1;
    }
}

console.log("You got " + correct + " correctly.");