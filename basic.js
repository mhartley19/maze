//create 15 rows and 21 colums
const maze = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "      W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];



let board = document.getElementById("board")
let xPosition = 0
let yPosition = 0

function gameBoard(rows) {

    for (rowNum = 0; rowNum < rows.length; rowNum++) {
        let eachRow = rows[rowNum]

        let innerDivs = ''
        xPosition++


        for (colNum = 0; colNum < eachRow.length; colNum++) {
            let location = "a" + (xPosition + (yPosition++))

            if (eachRow[colNum] === "W") {
                innerDivs += '<div class="wall"></div>'
            }

            else {
                innerDivs += '<div id="' + location + '"class="path"></div>'
            }

        }
        board.innerHTML += `<div class="row">${innerDivs}</div>`
    }
}
gameBoard(maze)


document.addEventListener("keydown", movement)

let x = 198




function movement(e) {
    let player = document.querySelector("#start")
    let winner = document.querySelector("#winner")
    let text = document.createTextNode("You're a Winner")

    
    if (e.code === "ArrowRight") {
        x = x + 1
        let space = "#a" + x
        let currentLocation = document.querySelector(space)
        if(currentLocation === null){
            x = x - 1
        }
        else if (space === "#a197"){
            winner.append(text)
        }
        currentLocation.append(player)
        
    }
    


    else if (e.code === "ArrowLeft") {
        x = x - 1
        let space = "#a" + x
        let currentLocation = document.querySelector(space)
        if(currentLocation === null){
            x = x + 1
        }
        currentLocation.append(player)

    }

    else if (e.code === "ArrowUp") {
        x = (x - 22)
        let space = "#a" + x
        let currentLocation = document.querySelector(space)
        if(currentLocation === null){
            x = x+22
        }
        currentLocation.append(player)

    }

    else if (e.code === "ArrowDown") {
        x = (x + 22)
        let space = "#a" + x
        let currentLocation = document.querySelector(space)
        if(currentLocation === null){
            x = x-22
        }
        currentLocation.append(player)

    }

    else{}

}





// starter = document.querySelector("#start")

// let boxTop = 188;
// let boxLeft = 8;

// document.addEventListener("keydown", movement)

// function movement(e) {
//     if (e.code === "ArrowDown") {
//         boxTop += 20
//     }
//     else if (e.code === "ArrowUp") {
//         boxTop -= 20
//     }
//     else if (e.code === "ArrowLeft") {
//         boxLeft -= 19.05
//     }
//     else if (e.code === "ArrowRight") {
//         boxLeft += 19.05
//     }
//     starter.style.top = boxTop + "px";
//     starter.style.left = boxLeft + "px";
// }




