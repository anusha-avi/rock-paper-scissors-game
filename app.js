let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}
function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scisscors";
}

function win(userchoice, computerchoice) {
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = `${convertToWord(userchoice)}${smalluserword} beats ${convertToWord(computerchoice)}${smallcompword} . YOU WIN!💖`;
    userchoice_div.classList.add('green-glow');
    setTimeout(() => userchoice_div.classList.remove('green-glow'), 300);
}



function lose(userchoice, computerchoice) {
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = `${convertToWord(userchoice)}${smalluserword} loses to ${convertToWord(computerchoice)}${smallcompword} . YOU LOST!😢`;
    userchoice_div.classList.add('red-glow');
    setTimeout(() => userchoice_div.classList.remove('red-glow'), 300);
}

function draw(userchoice, computerchoice) {
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    result_p.innerHTML = `${convertToWord(userchoice)}${smalluserword} equals ${convertToWord(computerchoice)}${smallcompword} . IT'S A DRAW!🙌`;
    userchoice_div.classList.add('gray-glow');
    setTimeout(() =>  userchoice_div.classList.remove('gray-glow'), 300);
}


function game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice, computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice, computerchoice);
            break;            
    }
}

function main() {
    rock_div.addEventListener('click',  () => game("r"));
    
    paper_div.addEventListener('click', () => game("p"));
    
    scissors_div.addEventListener('click', () =>game("s"));
}
main();