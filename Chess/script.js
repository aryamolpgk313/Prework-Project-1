var queen = {
    position: {
        x: 0,
        y: 0
    }
}


function playing(num, direction) {
    let temp;
    switch (direction) {
        case "E":
            temp = queen.position.y + num;
            if (temp > 8 && temp < 0) {
                console.log("outside");
            } else {
                queen.position.y = temp;
            }
            break;
        case "W":
            temp = queen.position.y - num;
            if (temp > 8 && temp < 0) {
                console.log("outside");
            } else {
                queen.position.y = temp;
            }
            break;
        case "N":
            temp = queen.position.x + num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.x = temp;
            }
            break;
        case "S":
            temp = queen.position.x - num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.x = temp;
            }
            break;

        case "NE":
            temp = queen.position.y + num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.y = temp;
            }
            temp = queen.position.x + num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.x = temp;
            }
            break;
        case "SE":
            temp = queen.position.y + num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.y = temp;
            }
            temp = queen.position.x - num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.x = temp;
            }
            break;
        case "NW":
            temp = queen.position.y - num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.y = temp;
            }
            temp = queen.position.x + num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.x = temp;
            }
            break;
        case "SW":
            temp = queen.position.y - num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.y = temp;
            }
            temp = queen.position.x - num;
            if (temp > 8 && temp < 0) {
                console.log("outside");

            } else {
                queen.position.x = temp;
            }
            break;
    }
}

function move() {
    let val = document.getElementById("player").value;
    let num = Number(val.slice(val.length - 1));
    let direction = val.slice(0, length - 1);
    console.log(direction);
    console.log(num);
    playing(num, direction);
    console.log(queen.position.x);
    console.log(queen.position.y);
    let b8 = document.getElementById
    var board = [
        ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
        ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
        ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
        ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
        ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
        ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
        ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
        ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
    ];
    console.log(board[queen.position.x][queen.position.y]);

    document.getElementById("position").innerHTML = "Position of queen is " + board[queen.position.x][queen.position.y];
    for (var i = 0; i < con.length; i++) {
        con[i].innerHTML = "";
    }

    console.log(con.length);

}