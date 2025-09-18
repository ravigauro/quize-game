const questions=[
    {
        "question":"There are 3 main parts in a plant: the leaves, roots, and …",
        answers:[
            {text:"Flower",correct:false},
            {text:"Trunk",correct:false},
            {text:"Nodes",correct:false},
            {text:"Stem",correct:true},
        ]
    },
    {
        "question":"Which of the following is NOT a way in which plant seeds can be spread out?",
        answers:[
            {text:"Stick to animals",correct:false},
            {text:"Bury under the soil",correct:true},
            {text:"",correct:false},
            {text:"Fly with the wind",correct:false},
        ]
},
{
"question":"In general, plants could be divided into which two main groups?",
answers:[
    {text:"Flowering plants and non-flowering plants",correct:true},
    {text:"Fruiting plants and non-fruiting plants",correct:false},
    {text:"Deciduous plants and evergreen plants",correct:false},
    {text:"",correct:false}
]
},

{
    "question":"Why do some plants have sharp thorns or spines?",
    answers:[
        {text:"",correct:false},
        {text:"To attract bees and other pollinators",correct:false},
        {text:"To defence against animals that feed on them",correct:true},
        {text:"To collect more water and sunlight",correct:false}
    ]
},
{
    "question":"What is the name of the male part of a flower?",
    answers:[
        {text:"",correct:false},
        {text:"Stamen",correct:false},
        {text:"Stigma",correct:true},
        {text:" Carpel",correct:false}
    ]
},
{
    "question":"How do dandelions spread their seeds for reproduction?",
    answers:[
        {text:"",correct:false},
        {text:"To let their seeds spread on the water",correct:false},
        {text:"To let their seeds fly with the wind",correct:true},
        {text:"To let their seeds carried by birds or animals",correct:false}
    ]
},
{
    "question":"Which of the following is actually NOT a type of plant?",
    answers:[
        {text:"",correct:false},
        {text:"Giant water lily",correct:false},
        {text:"Mushroom",correct:true},
        {text:"Moss",correct:false}
    ]
},
{
    "question":"Which plant is the main food of pandas?",
    answers:[
        {text:"",correct:false},
        {text:"Palm",correct:false},
        {text:"Knotweed",correct:false},
        {text:"Bamboo",correct:true}
    ]
},
{
    "question":"Approximately how many years can an oak tree live for?",
    answers:[
        {text:"100 years",correct:false},
        {text:"10,000 years",correct:false},
        {text:"1,000 years",correct:true},
        {text:"",correct:false}
    ]
},
{
    "question":"Approximately how many years can an oak tree live for?",
    answers:[
        {text:"Iris",correct:false},
        {text:"Lavender",correct:false},
        {text:"Rose",correct:true},
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
    } 
    else 
    {
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
function handleNextButton(){
    index++;
    if (questions.length>index) {
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
