const questions=[
    {
        "question":"Brass gets discoloured in the air because of the presence of which of the following gases in air?",
        answers:[
            {text:"Oxygen",correct:false},
            {text:"Carbon dioxide",correct:false},
            {text:"Nitrogen",correct:false},
            {text:"Hydrogen Sulphide",correct:true},
        ]
    },
    {
        "question":"Which of the following is a non-metal that remains liquid at room temperature?",
        answers:[
            {text:"Phosphorous",correct:false},
            {text:"Bromine",correct:true},
            {text:"Chlorine",correct:false},
            {text:"Helium",correct:false},
        ]
},
{
"question":"Chlorophyll is a naturally occurring chelate compound in which central metal is",
answers:[
    {text:"magnesium",correct:true},
    {text:"copper",correct:false},
    {text:"iron",correct:false},
    {text:"calcium",correct:false}
]
},

{
    "question":"Which of the following is used in pencils?",
    answers:[
        {text:"Silicon",correct:false},
        {text:"Charcoal",correct:false},
        {text:"Graphite",correct:true},
        {text:"Phosphorous",correct:false}
    ]
},
{
    "question":"Which of the following metals forms an amalgam with other metals?",
    answers:[
        {text:"Tin",correct:false},
        {text:"Zinc",correct:false},
        {text:"Mercury",correct:true},
        {text:"Lead",correct:false}
    ]
},
{
    "question":"Chemical formula for water is",
    answers:[
        {text:"NaAlO2",correct:false},
        {text:"Al2O3",correct:false},
        {text:"H2O",correct:true},
        {text:"CaSiO3",correct:false}
    ]
},
{
    "question":"The gas usually filled in the electric bulb is",
    answers:[
        {text:"hydrogen",correct:false},
        {text:"carbon dioxide",correct:false},
        {text:"nitrogen",correct:true},
        {text:"oxygen",correct:false}
    ]
},
{
    "question":"Washing soda is the common name for",
    answers:[
        {text:"Calcium bicarbonate",correct:false},
        {text:"Calcium carbonate",correct:false},
        {text:"Sodium carbonate",correct:true},
        {text:"Sodium bicarbonate",correct:false}
    ]
},
{
    "question":"Quartz crystals normally used in quartz clocks etc. is chemically",
    answers:[
        {text:"germanium oxide",correct:false},
        {text:"a mixture of germanium oxide and silicon dioxide",correct:false},
        {text:"silicon dioxide",correct:true},
        {text:"sodium silicate",correct:false}
    ]
},
{
    "question":"Which of the gas is not known as green house gas?",
    answers:[
        {text:"Methane",correct:false},
        {text:"Nitrous oxide",correct:false},
        {text:"Hydrogen",correct:true},
        {text:"Carbon dioxide",correct:false}
    ]
}
];


// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let index = 0;
// let score = 0;

// function startQuiz() {
//     index = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[index];
//     let questionNo = index + 1;
//     questionElement.innerHTML = questionNo + "." + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswers);

//     });
// }

// function resetState() {
//     nextButton.style.display = "none";
//     while (answerButtons.firstChild) {
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }

// function selectAnswers(e) {
//     const selectBtn = e.target;
//     const isCorrect = selectBtn.dataset.correct === "true";
//     if (isCorrect) {
//         selectBtn.classList.add("correct");
//         score++;
//     } else {
//         selectBtn.classList.add("incorrect");
//         showScore();
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// function showScore() {
//     resetState();
//     questionElement.innerHTML = `<center>You scored ${score} out of ${questions.length}!</center>`;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }

// function handleNextButton() {
//     index++;
//     if (index < questions.length) {
//         showQuestion();
//     } else {
//         showScore();
//     }
// }

// nextButton.addEventListener("click", () => {
//     if (index < questions.length) {
//         handleNextButton();
//     } else {
//         startQuiz();
//     }
// });

// startQuiz();


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


