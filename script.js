const questions = [
    { 
        question: "Who was the first president of Kenya?",
        answers: [
            { text: "Oginga Odinga", correct: false},
            { text: "Mwai Kibaki", correct: false},
            { text: "Jomo Kenyatta", correct: true},
            { text: "Arap Samoei", correct: false},
        ]
    },
    {
        question: "What is Kenya best known for?",
        answers: [
            { text: "Tourism", correct: false},
            { text: "Trade", correct: false},
            { text: "Sports", correct: true},
            { text: "None of the above", correct: false},
        ]
    },,
    {
        question: "Which of the following is not a ministry in Kenya?",
        answers: [
            { text: "Sports", correct: false},
            { text: "Foreign affairs", correct: false},
            { text: "Education", correct: true},
            { text: "Banking", correct: false},
        ]
    },
    {
    question: "Which county is not a city?",
        answers: [
            { text: "Kisumu", correct: false},
            { text: "Machakos", correct: false},
            { text: "Nairobi", correct: true},
            { text: "Nakuru", correct: false},
        ]
    },
    {
        question: "Which color is not in the Kenyan flag?",
        answers: [
            { text: "Black", correct: false},
            { text: "Red", correct: false},
            { text: "Yellow", correct: true},
            { text: "Green", correct: false},
        ]
    },
    {
        question: "Who among the following has not been a Kenyan president?",
        answers: [
            { text: "Oginga Odinga", correct: false},
            { text: "Mwai Kibaki", correct: false},
            { text: "Jomo Kenyatta", correct: },
            { text: "Arap Samoei", correct: false},
        ]
    },
    {
        question: "Which county among the following is the capital city of Kenya?",
        answers: [
            { text: "Mombasa", correct: false},
            { text: "Nakuru", correct: false},
            { text: "Nairobi", correct: true},
            { text: "Machakos", correct: false},
        ]
    },
    {
        question: "In which Year did Kenya gain its Independence?",
        answers: [
            { text: "1980", correct: false},
            { text: "1963", correct: true},
            { text: "1961", correct: false},
            { text: "1962", correct: false},
        ]
    },
    {
        question: "Who is the cabinet secretary of Education?",
        answers: [
            { text: "Fred Matiangí", correct: false},
            { text: "Kithure Kindiki", correct: false},
            { text: "Ezekiel Machogu", correct: true},
            { text: "Eliud Owalo", correct: false},
        ]
    },
    {
        question: "Who is the current deputy president of Kenya?",
        answers: [
            { text: "Musalia Mudavadi", correct: false},
            { text: "Mike Sonko", correct: false},
            { text: "Rigathi Gachagua", correct: true},
            { text: "Kalonzo Musyoka", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer")