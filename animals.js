const questions=[
    {
        "question":"What is the slowest animal in the world?",
        answers:[
            {text:"Rabbit",correct:false},
            {text:"Octopus",correct:false},
            {text:"Tortoise",correct:false},
            {text:"Three toed sloths",correct:true},
        ]
    },
    {
        "question":"How many years can a snail sleep for?",
        answers:[
            {text:"Two",correct:false},
            {text:"Three",correct:true},
            {text:"One",correct:false},
            {text:"Five",correct:false},
        ]
},
{
"question":"Which mammal has no vocal cords?",
answers:[
    {text:"Giraffe",correct:true},
    {text:"",correct:false},
    {text:"",correct:false},
    {text:"",correct:false}
]
},

{
    "question":"How many eyes does a honeybee have?",
    answers:[
        {text:"",correct:false},
        {text:"",correct:false},
        {text:"Five",correct:true},
        {text:"",correct:false}
    ]
},
{
    "question":"What is a female donkey called?",
    answers:[
        {text:"",correct:false},
        {text:"",correct:false},
        {text:"Jenny",correct:true},
        {text:"",correct:false}
    ]
},
{
    "question":"How many hearts does an octopus have?",
    answers:[
        {text:"",correct:false},
        {text:"",correct:false},
        {text:"Three",correct:true},
        {text:"",correct:false}
    ]
},
{
    "question":"What type of animal is a Flemish Giant?",
    answers:[
        {text:"",correct:false},
        {text:"",correct:false},
        {text:"Rabbit",correct:true},
        {text:"",correct:false}
    ]
},
{
    "question":"Which animal has cube-shaped poop?",
    answers:[
        {text:"",correct:false},
        {text:"",correct:false},
        {text:"Wombat",correct:true},
        {text:"",correct:false}
    ]
},
{
    "question":"Where is a shrimp's heart located?",
    answers:[
        {text:"",correct:false},
        {text:"",correct:false},
        {text:"In its head",correct:true},
        {text:"",correct:false}
    ]
},
{
    "question":"What is a rhino's horn made out of?",
    answers:[
        {text:"",correct:false},
        {text:"",correct:false},
        {text:"Keratin",correct:true},
        {text:"",correct:false}
    ]
}
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let index = 0;
let score = 0;

function startQuiz() {
    index = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[index];
    let questionNo = index + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswers);

    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswers(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
        // showScore();
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `<center>You scored ${score} out of ${questions.length}!</center>`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    index++;
    if (index < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (index < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

