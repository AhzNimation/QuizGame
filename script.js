const q = document.getElementById('q'),
    btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    cow = document.getElementById('cow'),
    sq = document.getElementById('sq'),
    other = document.getElementById('other'),
    container = document.getElementById('c');

let question = [
    'What is 100 * 100?',
    'What is 6 / 2 (1 + 2)?',
    'Where is the location of Eiffel Tower?',
    'What is 1 + 1 * 0?',
    'Where is the location of Tower of Pisa?',
    'When Facebook changed its company name to Meta?',
    'Who is Naruto son?',
    'Which country has the largest Muslim population in the world?',
    'Which country has the largest Christian population in the world?',
    'Which country has the largest Hinduism population in the world?',
    'Which country has the largest Buddhism population in the world?',
    'What is the largest country in the world?',
    'When covid 19 started?',
    'Blocky game that reached 1 trillion views on youtube',
    'Rick Astley best music?'
], answer1 = [
    '10,000',
    '9',
    'Italy',
    '1',
    'Italy',
    '2019',
    'Boruto',
    'Saudi Arabia',
    'Brazil',
    'Indian',
    'China',
    'Rusia',
    '2019',
    'Minecraft'
], answer2 = [
    '100,000',
    '1',
    'France',
    '0',
    'France',
    '2021',
    'Hiruto',
    'Indonesia',
    'USA',
    'Nepal',
    'Nepal',
    'China',
    '2020',
    'Roblox'
], trueAnswer = [
    '10,000',
    '9',
    'France',
    '1',
    'Italy',
    '2021',
    'Boruto',
    'Indonesia',
    'USA',
    'Indian',
    'China',
    'Rusia',
    '2019',
    'Minecraft'
]
let point = 0,
    currentQuestionIndex = 0;

let random = Math.floor(Math.random() * 2);

function btnfunction1() {
    if (btn1.innerText == trueAnswer[currentQuestionIndex]) {
        point++;
        cow.innerText = '✔️';
    } else {
        cow.innerText = '❌';
    }
    random = Math.floor(Math.random() * 2);
    currentQuestionIndex++;
}



function btnfunction2() {
    if (btn2.innerText == trueAnswer[currentQuestionIndex]) {
        point++;
        cow.innerText = '✔️';
    } else {
        cow.innerText = '❌';
    }
    random = Math.floor(Math.random() * 2);
    currentQuestionIndex++;
}

function end() {
    if (currentQuestionIndex >= question.length) {
        btn1.classList.add('hide');
        btn2.classList.add('hide');
        q.innerText = 'Your answered ' + point + ' / ' + question.length + ' correctly!';
    }
}

function buttonFill() {
    if (random == 0) {
        btn1.innerHTML = answer1[currentQuestionIndex];
        btn2.innerHTML = answer2[currentQuestionIndex];
    } else if (random == 1) {
        btn1.innerHTML = answer2[currentQuestionIndex];
        btn2.innerHTML = answer1[currentQuestionIndex];
    }
}

function btnSq(){
    if(currentQuestionIndex == question.length){
        sq.classList.remove('hide');
    } else{
        sq.classList.add('hide');
    }
}

function hideOther(){
    other.classList.add('hide');
    container.classList.remove('hide');
}
function showOther(){
    other.classList.remove('hide');
    container.classList.add('hide');
}

function update() {
    q.innerText = question[currentQuestionIndex];
    buttonFill();
    end();
    setTimeout(update);
}
update()