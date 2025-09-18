const questions=[
    {
        "question":"Where does Yari Bhanjyang lie?",
        answers:[
            {text:"Mugu",correct:false},
            {text:"Palpa",correct:false},
            {text:"Gorkha",correct:false},
            {text:"Humla",correct:true},
        ]
    },
    {
        "question":"Who founded the Silver Coin?",
        answers:[
            {text:"Ratna Malla",correct:false},
            {text:"Mahendra Malla",correct:true},
            {text:"Rudra malla",correct:false},
            {text:"Mandev",correct:false},
        ]
},
{
"question":"How many districts are there in Lumbini Province?",
answers:[
    {text:8,correct:false},
    {text:12,correct:true},
    {text:13,correct:false},
    {text:14,correct:false}
]
},

{
    "question":"Who was the last king of Nepal?",
    answers:[
        {text:"Prithivi Narayan Shah",correct:false},
        {text:"Hridayendra Shah",correct:false},
        {text:"Bikram Shah Dev",correct:true},
        {text:"Depenra",correct:false}
    ]
},
{
    "question":"Which was the first Nepali language magazine?",
    answers:[
        {text:"Sudha Sagar",correct:false},
        {text:"Pagal Basti",correct:false},
        {text:"Gorkha Bharat Jeewan",correct:true},
        {text:"Sharada",correct:false}
    ]
},
{
    "question":"Where does Rumjatar lie?",
    answers:[
        {text:"Solukhumbhu",correct:false},
        {text:"Tanahu",correct:false},
        {text:"Okhaldhunga",correct:true},
        {text:"Kabhre",correct:false}
    ]
},
{
    "question":"Which district is also called Himali district in Nepal?",
    answers:[
        {text:"Kaski",correct:false},
        {text:"Jhapa",correct:false},
        {text:"Bajura",correct:true},
        {text:"Chitwan",correct:false}
    ]
},
{
    "question":"Where does Bat Cave lie?",
    answers:[
        {text:"Pokhara",correct:false},
        {text:"Syangja",correct:false},
        {text:"Kaski",correct:true},
        {text:"Tanahu",correct:false}
    ]
},
{
    "question":"Which is the driest place in Nepal?",
    answers:[
        {text:"Terhathum",correct:false},
        {text:"Chitwan",correct:false},
        {text:"Manang",correct:true},
        {text:"Dadeldhura",correct:false}
    ]
},
{
    "question":"Which is the driest place in Nepal?",
    answers:[
        {text:"Terhathum",correct:false},
        {text:"Chitwan",correct:false},
        {text:"Manang",correct:true},
        {text:"Dadeldhura",correct:false}
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
