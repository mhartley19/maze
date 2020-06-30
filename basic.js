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
    "SW      W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];



let board = document.getElementById("board")
let xPosition = 0
let yPosition = 0

function gameBoard(rows){
    
    for(rowNum=0; rowNum < rows.length;rowNum++ ){
        let eachRow = rows[rowNum]
        
        let innerDivs = ''
        xPosition ++
        console.log(xPosition)
       
       for(colNum=0; colNum < eachRow.length; colNum++){
           yPosition ++

           if (eachRow[colNum] === "W"){
               innerDivs +='<div id="wall' + xPosition + yPosition + '"class="wall"></div>'
            
           }

           else if(eachRow[colNum] === "S"){
               
                innerDivs += '<div id="start"></div'  
           }

           else if(eachRow[colNum] === "F"){
            innerDivs += '<div id="end"></div'
           }

           else{ 
            innerDivs +='<div id="path' + xPosition + yPosition + '"class="path"></div>'
           }
            
            }
            board.innerHTML += `<div class="row">${innerDivs}</div>`
}


}
gameBoard(maze)

starter = document.querySelector("#start")

let boxTop = 188;
let boxLeft = 8;

document.addEventListener("keydown", movement)

function movement(e) {
    if (e.code === "ArrowDown") {
        boxTop += 20
    }
    else if (e.code === "ArrowUp") {
        boxTop -= 20
    }
    else if (e.code === "ArrowLeft") {
        boxLeft -= 19.05
    }
    else if (e.code === "ArrowRight") {
        boxLeft += 19.05
    }
    starter.style.top = boxTop + "px";
    starter.style.left = boxLeft + "px";
}




