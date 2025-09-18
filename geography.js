const questions=[
    {
        "question":"How far is bangladesh from nepal?",
        answers:[
            {text:"20 k.m",correct:false},
            {text:"35 k.m",correct:false},
            {text:"47 k.m",correct:false},
            {text:"27 k.m",correct:true},
        ]
    },
    {
        "question":"Nepal ko utari bindu kun jilla ma parxa?",
        answers:[
            {text:"Manang",correct:false},
             {text:"Humla",correct:true},
            {text:"Mustang",correct:false},
            {text:"Taplejung",correct:false},
        ]
},
{
"question":"Sabaibhada kam uchai ma raheko nepal ko jilla sadarmukam kun ho?",
answers:[
    {text:"Mahotari",correct:true},
    {text:"Dhanusa",correct:false},
    {text:"Sarlahi",correct:false},
    {text:"sindhuli",correct:false}
]
},

{
    "question":"Nepal ko pranalik samay kun himal lai aadhar mani nirdharan gariyeko chha? ",
    answers:[
        {text:"Sagarmatha",correct:false},
        {text:"Machhapuchhre",correct:false},
        {text:"Gaurishankar himal",correct:true},
        {text:"Kanchanjunga",correct:false}
    ]
},
{
    "question":"Nepal ko pranalik samay kun deshantar rekha lai aadhar mani nirdharan gariyeko chha? ",
    answers:[
        {text:"85 degree 15 minutes",correct:false},
        {text:"87 degree 15 minutes",correct:false},
        {text:"76 degree 15 minutes",correct:true},
        {text:"88 degree 15 minutes",correct:false}
    ]
},
{
    "question":"Sabai bhanda badi uchai ma raheko nepal ko jilla sadarmukam kun ho? ",
    answers:[
        {text:"Dolpa",correct:false},
        {text:"Jumla",correct:false},
        {text:"Humla",correct:true},
        {text:"Mugu",correct:false}
    ]
},
{
    "question":"Nepal ko uttar dakchhin adhiktam chaudai kati k.m raheko chha? ",
    answers:[
        {text:"145 k.m",correct:false},
        {text:"193 k.m",correct:false},
        {text:"241 k.m",correct:true},
        {text:"885 k.m",correct:false}
    ]
},
{
    "question":"Karnali nadi ko lambai kati k.m raheko chha? ",
    answers:[
        {text:"505 k.m",correct:false},
        {text:"506 k.m",correct:false},
        {text:"507 k.m",correct:true},
        {text:"508 k.m",correct:false}
    ]
},
{
    "question":"Nepal ko nadiharubata kati jalbidhut utpadan garna sakine sambhawana raheko chha? ",
    answers:[
        {text:"15000 mw",correct:false},
        {text:"21000 mw",correct:false},
        {text:"83000 mw",correct:true},
        {text:"54000 mw",correct:false}
    ]
},
{
    "question":"Nepal asiyako kun bhagma parchha? ",
    answers:[
        {text:"purvi bhagma",correct:false},
        {text:"paschim bhagma",correct:false},
        {text:"Madhya bhagma",correct:true},
        {text:"kunai pani hoina",correct:false}
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
