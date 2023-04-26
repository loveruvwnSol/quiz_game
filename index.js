const quizList = [
    // {
    //     question: '僕がハマってる言語は？',
    //     answer:'ts'
    // },
    // {
    //     question: 'このサークルの名前は？',
    //     answer: 'Make IT',
    // },
    {
        question: 'Re:ゼロから始める〇〇〇〇〇',
        answer: '異世界生活',
    },
    {
        question: '久保さんは僕を〇〇〇〇',
        answer: '許さない',
    },
    {
        question: '〇のあすから',
        answer: '凪',
    },
    {
        question: '〇〇〇でも恋がしたい',
        answer: '中二病',
    },
    {
        question: 'ソードアート・〇〇〇〇〇',
        answer: 'オンライン',
    },
    {
        question: 'ビートルズのボーカルは誰ですか？',
        answer: 'ジョン・レノン',
    },
    {
        question: '日本の現在の天皇は誰ですか？',
        answer: '徳仁',
    },
    {
        question: '世界で最も人口が多い国はどこですか？',
        answer: '中国',
    },
];

let currentQuizIndex = 0;

const answerResultCorrectElement   = document.querySelector('.answer-result-correct');
const answerResultIncorrectElement = document.querySelector('.answer-result-incorrect');
const quizIndexElement             = document.querySelector('#quiz-index');
const questionElement              = document.querySelector('#question');
const inputAnswerElement           = document.querySelector('#input-answer');
const toAnswerButtonElement        = document.querySelector('#to-answer-button');

const displayQuestion = () => {
    questionElement.textContent  = quizList[currentQuizIndex].question;
    quizIndexElement.textContent = currentQuizIndex + 1 + '問目';
}

const displayAnswerResult = () => {
    if (inputAnswerElement.value === quizList[currentQuizIndex].answer) {
        answerResultCorrectElement.classList.add('display-answer-result');
    } else {
        answerResultIncorrectElement.classList.add('display-answer-result');
    }

    setTimeout(() => {
        currentQuizIndex++;
        resetFormValues();
        resetDisplayAnswerResult();
        displayQuestion();
    }, 3000);
}

const resetFormValues = () => {
    quizIndexElement.textContent    = '';
    questionElement.textContent     = '';
    inputAnswerElement.value        = '';
}

const resetDisplayAnswerResult = () => {
    answerResultCorrectElement.classList.remove('display-answer-result');
    answerResultIncorrectElement.classList.remove('display-answer-result');
}

toAnswerButtonElement.addEventListener('click', displayAnswerResult);

displayQuestion();