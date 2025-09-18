const questions=[
    {
        "question":"In which district does jalpa devi temple lie?",
        answers:[
            {text:"Sankhuwasabha",correct:false},
            {text:"Udaypur",correct:false},
            {text:"Sunsari",correct:false},
            {text:"Dhankuta",correct:true},
        ]
    },
    {
        "question":"What is the name of the hotel that is located at the top? ",
        answers:[
            {text:"Hotel Tara",correct:false},
             {text:"Hotel Everest View",correct:true},
            {text:"Hotel Lama",correct:false},
            {text:"Hotel Mountain View",correct:false},
        ]
},
{
"question":"Where is adiwasi janjati sangrahlay is located?",
answers:[
    {text:"Sunsari",correct:true},
    {text:"Jhapa",correct:false},
    {text:"Morang",correct:false},
    {text:"Udaypur",correct:false}
]
},

{
    "question":"Where is ghorne jarna is located?",
    answers:[
        {text:"Udaypur",correct:false},
        {text:"Jhapa",correct:false},
        {text:"Sankhuwasabha",correct:true},
        {text:"Sunsari",correct:false}
    ]
},
{
    "question":"Where is ghorne jarna is located?",
    answers:[
        {text:"Udaypur",correct:false},
        {text:"Jhapa",correct:false},
        {text:"Sankhuwasabha",correct:true},
        {text:"Sunsari",correct:false}
    ]
},
{
    "question":"Where is ghorne jarna is located?",
    answers:[
        {text:"Udaypur",correct:false},
        {text:"Jhapa",correct:false},
        {text:"Sankhuwasabha",correct:true},
        {text:"Sunsari",correct:false}
    ]
},
{
    "question":"Where is ghorne jarna is located?",
    answers:[
        {text:"Udaypur",correct:false},
        {text:"Jhapa",correct:false},
        {text:"Sankhuwasabha",correct:true},
        {text:"Sunsari",correct:false}
    ]
},
{
    "question":"Where is ghorne jarna is located?",
    answers:[
        {text:"Udaypur",correct:false},
        {text:"Jhapa",correct:false},
        {text:"Sankhuwasabha",correct:true},
        {text:"Sunsari",correct:false}
    ]
},
{
    "question":"Where is ghorne jarna is located?",
    answers:[
        {text:"Udaypur",correct:false},
        {text:"Jhapa",correct:false},
        {text:"Sankhuwasabha",correct:true},
        {text:"Sunsari",correct:false}
    ]
},
{
    "question":"Where is ghorne jarna is located?",
    answers:[
        {text:"Udaypur",correct:false},
        {text:"Jhapa",correct:false},
        {text:"Sankhuwasabha",correct:true},
        {text:"Sunsari",correct:false}
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
