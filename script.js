const questions = [
    {
        question: 'Quel est le premier principe de la méthode GTD ?',
        options: ['Clarifier', 'Capturer', 'Organiser'],
        answer: 'Capturer'
    },
    {
        question: 'Que signifie GTD ?',
        options: ['Get Things Done', 'Great Task Design', 'Goal Tracking Daily'],
        answer: 'Get Things Done'
    },
    {
        question: 'Quel outil est recommandé pour la capture ?',
        options: ['Agenda', 'Liste de tâches', 'Carnet'],
        answer: 'Carnet'
    }
];

let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';
    const q = questions[currentQuestionIndex];
    const questionEl = document.createElement('h3');
    questionEl.textContent = q.question;
    questionContainer.appendChild(questionEl);

    q.options.forEach(option => {
        const btn = document.createElement('div');
        btn.textContent = option;
        btn.classList.add('option');
        btn.onclick = () => selectAnswer(btn, option);
        questionContainer.appendChild(btn);
    });
}

function selectAnswer(element, selected) {
    const correct = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.onclick = null);
    if (selected === correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-btn').style.display = 'none';
    } else {
        document.getElementById('question-container').innerHTML = '<h3>Quiz terminé ! Bravo !</h3>';
        document.getElementById('next-btn').style.display = 'none';
    }
}
