var p1, p2, p1Score, p2Score, p1Btn, p2Btn, gameTally, playingTo, gameWon, resetBtn;

p1 = document.getElementById('p1');
p2 = document.getElementById('p2');
p1Btn = document.getElementById('p1Btn');
p2Btn = document.getElementById('p2Btn');
gameTally = document.getElementById('gameTally');
playingTo = document.getElementById('playingTo');
resetBtn = document.getElementById('reset');

function resetGame() {
	p1.textContent = 0;
	p2.textContent = 0;
	p1.style.color = 'black';
	p2.style.color = 'black';
	gameTally.value = "";
	playingTo.textContent = "";
	p1Score = 0;
	p2Score = 0;
	gameWon = 1;
	p1Btn.disabled = true;
	p2Btn.disabled = true;
}

function p1BtnUpdate() {
	p1Score = parseInt(p1.textContent);
	p1Score++;
	p1.textContent = p1Score;
	
	checkWin();
}

function p2BtnUpdate() {
	p2Score = parseInt(p2.textContent);
	p2Score++;
	p2.textContent = p2Score;
	
	checkWin();
}

function checkWin() {
	if (p1Score === gameWon) {
		p1.style.color = 'green';
		p1Btn.disabled = true;
		p2Btn.disabled = true;
	} else if ( p2Score === gameWon) {
		p2.style.color = 'green';
		p1Btn.disabled = true;
		p2Btn.disabled = true;
	}
}

function updatePlayingTo() {
	playingTo.textContent = gameTally.value;
	gameWon = parseInt(gameTally.value);
	
	if (parseInt(gameTally.value) > 0) {
		p1Btn.disabled = false;
		p2Btn.disabled = false;
	}
}

// resetGame treated like initializer function/game initial setup
resetGame();

resetBtn.addEventListener('click', resetGame);
gameTally.addEventListener('change', updatePlayingTo);
p1Btn.addEventListener('click', p1BtnUpdate);
p2Btn.addEventListener('click', p2BtnUpdate);