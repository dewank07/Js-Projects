const quizData = [
    {
        question: 'How old is Anvesh',
         a : '10',
         b : '20',
         c : '15',
         d : '2',
        correct: 'b'
    },
    {  question: 'How old is Anvesh1',
        a : '10',
        b : '20',
        c : '15',
        d : '2',
       correct: 'b'
        
    },
    {  question: 'How old is Anvesh2',
        a : '10',
        b : '20',
        c : '15',
        d : '2',
       correct: 'b'
        
    },
    {  question: 'How old is Anvesh3',
        a : '10',
        b : '20',
        c : '15',
        d : '2',
       correct: 'b'
        
    },
];
const questionEl = document.getElementById('questions')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");



let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{   
    deSelect();
    const  currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
 
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}
function getSelected()
{
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked)
        {
           answer = answerEl.id;
           
        }
    });
    
        return answer;
   
   
}

function deSelect()
{
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
    

}

submitBtn.addEventListener('click', () => {
    // check to see the answer 
    const answer1 = getSelected();
    console.log(answer1);
    if(answer1)
    {
        if(answer1 === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz  < quizData.length)
        {
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You answerd correctly at ${score}/${quizData.length} questions. </h2> <button onClick = "location.reload()">Reload</button>`
        }
    }
        
    
});





