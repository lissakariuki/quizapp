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
            { text: "Tourism", correct: true},
            { text: "Trade", correct: false},
            { text: "Sports", correct: false},
            { text: "Jobs", correct: false},
        ]
    },
    {
        question: "Which of the following is not a ministry in Kenya?",
        answers: [
            { text: "Sports", correct: false},
            { text: "Foreign affairs", correct: false},
            { text: "Education", correct: false},
            { text: "Banking", correct: true},
        ]
    },
    {
        question: "Which of the following countries are not part of the COMESA?",
        answers: [
            { text: "Uganda", correct: false},
            { text: "Kenya", correct: false},
            { text: "Ethiopia", correct: false},
            { text: "South Africa", correct: true},
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
            { text: "Blue", correct: true},
            { text: "Green", correct: false},
        ]
    },
    {
        question: "Who among the following has not been a Kenyan president?",
        answers: [
            { text: "Oginga Odinga", correct: true},
            { text: "Mwai Kibaki", correct: false},
            { text: "Jomo Kenyatta", correct: false},
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
        question: "In which Year did Kenya become a republic?",
        answers: [
            { text: "1945", correct: false},
            { text: "1964", correct: true},
            { text: "1963", correct: false},
            { text: "1960", correct: false},
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
        question: "What is the name of the highest mountain in Kenya?",
        answers: [
           { text: "Mount Kenya", correct: true}, 
           {text: "Mount Longonot", correct: false},
           {text: "Mount Elgon", correct: false},
           {text: "Mount Kinangop", correct: false},
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
    },
    {
        question: "Which of the following comprises of the three main communities/language speakers in Kenya?",
        answers: [
            { text: "Bantus, Americans, Abaluhya", correct: false},
            { text: "Bantus, Nilotes, Cushites", correct: true},
            { text: "Swahili, English, Kikuyu ", correct: false},
            { text: "Nilotes, Swahili, Bantus", correct: false},
        ]
    },
    {
        question: "Which  pandemic affected most parts of the world and led to the loss of many lives?",
        answers: [
            { text: "Covid-19", correct: true},
            { text: "Cholera", correct: false},
            { text: "Tuberculosis", correct: false},
            { text: "Malaria", correct: false},
        ]
    },
    {
        question: "Which of the following is not among the three arms of the government of Kenya?",
        answers: [
            { text: "Executive", correct: false},
            { text: "Legislature", correct: false},
            { text: "Parliament", correct: true},
            { text: "Judiciary", correct: false},
        ]
    },
    {
        question: "Which of the following is not a popular dish in Kenya?",
        answers: [
            { text: "Githeri", correct: false},
            { text: "Mukimo", correct: false},
            { text: "Muthokoi", correct: false},
            { text: "Mojito", correct: true},
        ]
    },
    {
        question: "Which of the following is not among the Major lakes in Kenya?",
        answers: [
            { text: "Lake Naivasha", correct: false},
            { text: "Lake Malawi", correct: false},
            { text: "Lake Bogoria", correct: true},
            { text: "Lake Victoria", correct: false},
        ]
    },
    {
        question: "Which of the following is not among the Superior courts in the country Kenya?",
        answers: [
            { text: "Supreme Court", correct: true},
            { text: "High Court", correct: false},
            { text: "Land Court", correct: true},
            { text: "Labour Relations Court", correct: false},
        ]
    },
    {
        question: "How many counties are there in Kenya?",
        answers: [
            {text: "45", correct: false},
            {text: "42", correct: false},
            {text: "1", correct: false},
            {text: "47",correct:true},
           
        ]
    },
    {
        question: "What is the approximate population of the people living in Kenya?",
        answers: [
            {text: "54 Million", correct: false},
            {text: "78 Million", correct: false},
            {text: "57 Million", correct: false},
            {text: "58 Million", correct: true},
            
        ]
    }, 
    {
        question: "What is the capital city of Kenya?",
        answers: [
            {text: "Nairobi", correct: true},
            {text: "Mombasa", correct: false},
            {text: "Nakuru", correct: false},
            {text: "Naivasha",correct: false}, 
        ]
    },
    {
        question: "When was the Standard guage raliway finally completed in Kenya?",
        answers: [
            {text: "2020", correct: true},
            {text: "2022", correct: false},
            {text: "2025", correct: false},
            {text: "2019",correct: false}, 
        ]
         }, //add scores to keep track of the score for each player.
    //if wrong show/display the correct answer
    //make it interesting and user friendly
    //color blending hence use of the different color schemes
    //aesthetic user-interface for enriched user experience
    //allow people to follow you.
    //look for hosting sites to host my application.
    //mobile app if android studio will be perfect to use.
    //add a timer 5 seconds to 10seconds maximum for answering a question. 
    //conclusion to be done by end of July 2024
    //allow users to type out their preffered name
    //SHOW TOTAL SCORE after the player has finished the test
    //24/06/2024
    //25/06/2024 
    //final phase end of year
    // the final commit since it needs to be hosted soon.

    //cool designing features to enrich user experience.
    //congratulations pop up when one gets a question right; colorful
    //check on whether login/ logout should be included
{
        question: "After how long are general elections held in Kenya?",
        answers: [
            {text: "5 years", correct: true},
            {text: "10 years", correct: false},
            {text: "3 years", correct: false},
            {text: "15 years",correct: false}, 
]};
  //add scores to keep track of the score for each player.
//if wrong show/display the correct answer
//enable one to choose player name if they please


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer")