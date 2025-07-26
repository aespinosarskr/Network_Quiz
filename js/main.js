document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('start-form');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const difficultySelect = document.getElementById('difficulty');
    const nameInput = document.getElementById('name');

    let currentQuestion = 0;
    let score = 0;
    let userAnswers = [];
    let quizQuestions = [];
    let userName = '';

    function getQuestionsByDifficulty(difficulty) {
        if (difficulty === 'easy') return questions.slice(0, 10);
        if (difficulty === 'medium') return questions.slice(0, 30);
        return questions.slice(0, 50);
    }

    function showQuestion(index) {
        const q = quizQuestions[index];
        if (!q) return;

        let optionsHtml = q.options.map((opt, i) =>
            `<label>
                <input type="radio" name="option" value="${i}">
                ${opt}
            </label><br>`
        ).join('');

        quizContainer.innerHTML = `
            <h2>Pregunta ${index + 1} de ${quizQuestions.length}</h2>
            <p>${q.question}</p>
            <div id="options-container">
                ${optionsHtml}
            </div>
        `;

        document.querySelectorAll('input[name="option"]').forEach(input => {
            input.addEventListener('change', function () {
                const selected = parseInt(this.value);
                userAnswers[index] = selected;
                if (selected === q.answer) score++;
                currentQuestion++;
                if (currentQuestion < quizQuestions.length) {
                    showQuestion(currentQuestion);
                } else {
                    showResult();
                }
            });
        });
    }

    function showResult() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        let resultHtml = `<h2>¡Quiz terminado!</h2>
            <p><strong>${userName}</strong>, tu puntaje es: ${score} de ${quizQuestions.length}</p>
            <hr>
            <h3>Respuestas:</h3>
            <ol>`;

        quizQuestions.forEach((q, idx) => {
            const userAns = userAnswers[idx];
            const isCorrect = userAns === q.answer;
            let icon = isCorrect
                ? '<span class="result-icon" style="color:green;">&#10004;</span>'
                : '<span class="result-icon" style="color:red;">&#10008;</span>';

            let optionsHtml = q.options.map((opt, i) => {
                let className = '';
                let iconOpt = '';
                if (i === q.answer) {
                    className = 'result-correct';
                    iconOpt = ' <span style="color:green;">&#10004;</span>';
                }
                if (userAns === i && userAns !== q.answer) {
                    className = 'result-incorrect';
                    iconOpt = ' <span style="color:red;">&#10008;</span>';
                }
                return `<li class="${className}" style="display:flex;align-items:center;margin-bottom:2px;">
    <span style="width:18px;display:inline-block;">${iconOpt}</span>
    <span style="flex:1;">${opt}</span>
</li>`;
            }).join('');

            resultHtml += `
                <li>
                    ${icon}
                    <div>
                        <strong>Pregunta ${idx + 1} de ${quizQuestions.length}</strong><br>
                        <ul style="margin:2px 0 0 0;padding-left:18px;">
                            ${optionsHtml}
                        </ul>
                    </div>
                </li>
            `;
        });

        resultHtml += `</ol>
            <button id="restart-btn" style="margin-top:20px;">Reiniciar Quiz</button>
        `;
        resultContainer.innerHTML = resultHtml;

        document.getElementById('restart-btn').addEventListener('click', function () {
            currentQuestion = 0;
            score = 0;
            userAnswers = [];
            resultContainer.style.display = 'none';
            form.reset();
            form.style.display = 'block';
            showDuck(false);
            const duck = document.getElementById('duck-secret');
            if (duck) duck.src = './img/Perry.webp';
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        userName = nameInput ? nameInput.value.trim() : '';
        const difficulty = difficultySelect.value;
        quizQuestions = getQuestionsByDifficulty(difficulty);
        form.style.display = 'none';
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        showQuestion(currentQuestion);
        showDuck(true);
    });


    let duckClickCount = 0;
    let duckClickTimeout;
    let duckTrucoUsado = false;

    const duck = document.getElementById('duck-secret');
    if (duck) {
        duck.addEventListener('click', function (e) {
            if (duckTrucoUsado) return;
            e.stopPropagation();
            duckClickCount++;
            clearTimeout(duckClickTimeout);
            duckClickTimeout = setTimeout(() => duckClickCount = 0, 1500);

            if (duckClickCount === 5) {
                duckClickCount = 0;
                document.getElementById('croqueta-modal').style.display = 'flex';
                document.getElementById('croqueta-input').value = '';
                document.getElementById('croqueta-input').focus();
            }
        });

        duck.addEventListener('mouseenter', () => duck.style.opacity = '1');
        duck.addEventListener('mouseleave', () => duck.style.opacity = '0.7');
    }

    // Modal
    document.getElementById('croqueta-ok').onclick = function () {
        const pass = document.getElementById('croqueta-input').value;
        document.getElementById('croqueta-modal').style.display = 'none';
        if (pass === 'igorMenso') {
            if (quizQuestions.length === 0) return;
            for (let i = 0; i < quizQuestions.length; i++) {
                userAnswers[i] = quizQuestions[i].answer;
            }
            score = quizQuestions.length;
            currentQuestion = quizQuestions.length;
            showResult();
            if (duck) duck.src = './img/perri.webp';
            duckTrucoUsado = true;
        } else {
            alert('Contraseña incorrecta');
        }
    };
    document.getElementById('croqueta-cancel').onclick = function () {
        document.getElementById('croqueta-modal').style.display = 'none';
    };

    function showDuck(show) {
        const duck = document.getElementById('duck-secret');
        if (duck) duck.style.display = show ? 'block' : 'none';
    }
});