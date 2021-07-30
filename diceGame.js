'use strict'

// BUTTONS
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
// Scores Elements
const p0_currScore = document.querySelector('.p0-curr-score');
const p1_currScore = document.querySelector('.p1-curr-score');
const p0_totalScore = document.querySelector('.p0-score');
const p1_totalScore = document.querySelector('.p1-score');
// Scores values
let currScore = 0;
const totalScore = [0, 0];
let activePlayer = 0;
//Dice
const diceEl = document.querySelector('.dice');
//Players
const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
//Results
const player0Wins = document.querySelector('.player0-wins');
const player1Wins = document.querySelector('.player1-wins');
const parda = document.querySelector('.overlay');

// Rolling Dice
btnRoll.addEventListener('click', function () {
    const r_no = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${r_no}.png`;
    if (r_no === 1) {
        currScore = 0;
        // document.querySelector(`.p${activePlayer}-curr-score`).textContent = 0;
        // activePlayer = (activePlayer === 1) ? 0 : 1;
        if (player0.classList.contains('player-active')) {
            p0_currScore.textContent = 0;
            player0.classList.remove('player-active');
            player1.classList.add('player-active');
        }
        else if (player1.classList.contains('player-active')) {
            p1_currScore.textContent = 0;
            player1.classList.remove('player-active');
            player0.classList.add('player-active');
        }
    }
    else {
        currScore += r_no;
        // document.querySelector(`.p${activePlayer}-curr-score`) = currScore;
        if (player0.classList.contains('player-active'))
            p0_currScore.textContent = currScore;
        else
            p1_currScore.textContent = currScore;
    }
});

//Holding Dice
btnHold.addEventListener('click', function () {
    // totalScore[activePlayer] += currScore;
    // currScore = 0;
    // document.querySelector(`.p${activePlayer}-curr-score`).textContent = 0;
    // if (totalScore[activePlayer] >= 100) {
    //     document.querySelector(`.player${0}-wins`).classList.remove('hidden');
    //     parda.classList.remove('hidden');
    //     btnRoll.disabled = true;
    //     btnHold.disabled = true;
    // }
    // activePlayer = (activePlayer === 1) ? 0 : 1;

    if (player0.classList.contains('player-active')) {
        p0_totalScore.textContent = Number(p0_totalScore.textContent) + currScore;
        currScore = 0;
        p0_currScore.textContent = 0;
        if (Number(p0_totalScore.textContent) >= 100) {
            player0Wins.classList.remove('hidden');
            parda.classList.remove('hidden');
            btnRoll.disabled = true;
            btnHold.disabled = true;
        }
        player0.classList.remove('player-active');
        player1.classList.add('player-active');
    }
    else if (player1.classList.contains('player-active')) {
        p1_totalScore.textContent = Number(p1_totalScore.textContent) + currScore;
        currScore = 0;
        p1_currScore.textContent = 0;
        if (Number(p1_totalScore.textContent) >= 100) {
            player1Wins.classList.remove('hidden');
            parda.classList.remove('hidden');
            btnRoll.disabled = true;
            btnHold.disabled = true;
        }
        player1.classList.remove('player-active');
        player0.classList.add('player-active');
    }
});

//New Game
btnNew.addEventListener('click', function () {
    p0_currScore.textContent = 0;
    p1_currScore.textContent = 0;
    p0_totalScore.textContent = 0;
    p1_totalScore.textContent = 0;
    // activePlayer = 0;
    player0.classList.add('player-active');
    player1.classList.remove('player-active');
    diceEl.classList.add('hidden');
    btnRoll.disabled = false;
    btnHold.disabled = false;
})

parda.addEventListener('click', function () {
    // document.querySelector(`.player${activePlayer}-wins`).classList.add('hidden');
    // parda.classList.add('hidden');
    if (!player0Wins.classList.contains('hidden')) {
        parda.classList.add('hidden');
        player0Wins.classList.add('hidden');
    }
    else if (!player1Wins.classList.contains('hidden')) {
        parda.classList.add('hidden');
        player1Wins.classList.add('hidden');
    }
});




