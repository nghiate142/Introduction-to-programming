let b = document.getElementById('test');
let board = [];
let data = "";

for(let i = 0; i < 6; i++){
    board[i] = new Array(".", ".", ".", ".", ".", ".");
}
console.log(board, "board");
for(let i = 0; i < 6; i++){
    data += "</br></br>"

for(let j = 0; j < 6; j++){
    data += board[i][j]+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
    }
}

b.innerHTML = data;

let check_x = true;
function changeValue() {
    let positionX = + prompt("X: ");
    let positionY = + prompt("Y: ");
    data = "";
    if (check_x) {
        board[positionX][positionY] = "x";
    }
    else {    
        board[positionX][positionY] = "o";
    }

    for(let i = 0; i < 6; i++){;
    data += '<br/><br/>';}
    for(let j = 0; j < 6; j++) {;
    data = board[i][j]+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
    }
}

b.innerHTML = data;

let array1 = ["a" , "b" , "c"];
let array2 = ["d" , "e" , "f"];
let array3 = array1;

document.write(array3);

