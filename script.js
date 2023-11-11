const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
let currentQuestion = {};
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const resultEl = document.getElementById('result');

function generateQuestion() {
    const noteIndex = Math.floor(Math.random() * notes.length);
    const change = Math.floor(Math.random() * 25) - 12;
    const newNoteIndex = (noteIndex + change + notes.length) % notes.length;
    currentQuestion = { note: notes[noteIndex], change, answer: notes[newNoteIndex] };
    questionEl.textContent = `${currentQuestion.note} + ${currentQuestion.change}`;
}

function checkAnswer(selectedNote) {
    const isCorrect = selectedNote === currentQuestion.answer;
    resultEl.textContent = isCorrect ? `正解！ 正解は ${currentQuestion.answer}` : `不正解！ 正解は ${currentQuestion.answer}`;
    resultEl.style.color = isCorrect ? 'green' : 'red';
    setTimeout(generateQuestion, 2000); // 少し長めの間隔で次の問題へ移行
}

function setupChoices() {
    notes.forEach(note => {
        const button = document.createElement('button');
        button.textContent = note;
        button.addEventListener('click', () => checkAnswer(note));
        choicesEl.appendChild(button);
    });
}

setupChoices();
generateQuestion();
