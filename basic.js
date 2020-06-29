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
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let board = document.getElementById("board")


function wallorblank(rows){
    
    for(rowNum=0; rowNum < rows.length;rowNum++ ){
        let eachRow = rows[rowNum]
        let innerDivs = ''
       
       for(colNum=0; colNum < eachRow.length; colNum++){
           if (eachRow[colNum] === "W"){
               innerDivs += '<div class="inner"></div>'

           }

        //    else if(eachRow[colNum] === "S"){
        //        innerDivs += '<div class="start"></div'
        //    }

        //    else if(eachRow[colNum] === "F"){
        //     innerDivs += '<div class="end"></div'
        

           else{ 
               innerDivs += '<div class="block"></div>'
           }
            

            }
            board.innerHTML += `<div class="row">${innerDivs}</div>`
}

}
wallorblank(maze)