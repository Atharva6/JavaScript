const quizData = [
        {
            question: "What is the most used programming language in 2019?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "Who is the President of US?",
            a: "Florin Pop",
            b: "Donald Trump",
            c: "Ivan Saldano",
            d: "Mihai Andrei",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Cascading Style Sheet",
            c: "Jason Object Notation",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
];

// Constant and Variables
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
let question_count = 0;
const submit_btn = document.getElementById('sub');

loadQues(); // Load the Question on StartUp

// Adding Question
function loadQues() {
    const currentquiz = quizData[question_count];
    let question = document.querySelector('.question');
    question.innerHTML = '<h2>'+ currentquiz.question +'</h2>';

    a_text.innerHTML = currentquiz.a
    b_text.innerHTML = currentquiz.b
    c_text.innerHTML = currentquiz.c
    d_text.innerHTML = currentquiz.d   
}

// Updating Question 
submit_btn.addEventListener('click', ()=>{
    if(question_count < quizData.length){
        question_count++;
        loadQues();
    }
    else{
        alert("Completed")
    }
})

// Main Logic
