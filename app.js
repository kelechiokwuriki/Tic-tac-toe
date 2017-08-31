var restartBut = document.getElementById("restart");

restartBut.addEventListener("click", function(){
    clearBoard();
    startGame();
})

function startGame() {
    document.turn = "X";
    setMessage(document.turn + " get's to start");
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if(square.innerText == '') {
        square.innerText = document.turn;
        switchTurn();
    }
    else {
        setMessage("Pick another square");
    }
    
}

function clearBoard() {
    var boards = document.querySelectorAll(".square");
    
    boards.forEach(function(board) {
        board.innerText = "";
    })
    
}

function CheckforTie()
{
    for(var i=1;i<10;i++)
    {
      if(getBox(i)=="")
       return false;
    }
    return true;
}

function switchTurn() {
    if(checkForWinner(document.turn)) {
        setMessage("Congrats " + document.turn + ", you won!");
        
//        clearBoard();
        //disable board and call restart function
    }
    else if(CheckforTie()) {
        setMessage("Its a TIE..!! Play again...!!!");
    }
    else if(document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn.");
    }
    else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn.");
    }
    
}

function checkForWinner(move) {
    var result = false;
    if(checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 3, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}