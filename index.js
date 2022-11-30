let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}

// Funcio per borrar les taulas.
function erase() {
    let taula = document.getElementById('taula');
    while (taula.firstChild) {
        taula.removeChild(taula.firstChild);
    }
}

// Crea una funció anomenada inicialitzaJoc
function inicialitzaJoc() {
    // Delete taula
    erase();
    // Selecciona els inputs
    let rows = document.getElementById('inputRow').value;
    let cols = document.getElementById('inputCol').value;

    // Crea una taula
    const tbl = document.createElement("table");
    
    tbl.id = "sdfg"
    const tblBody = document.createElement("tbody");
    
    
    // Crea els rows
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            //Crea tants <td> com cols
            const cell = document.createElement("td");
            //Afegeix els <td> dintre del <tr> 
            row.appendChild(cell);
        }
        // Afegeix els <tr> dintre del <tbody>
        tblBody.appendChild(row);
    }
    /// Afegeix el <tbody> amb els seus subelements a la <table>
    tbl.appendChild(tblBody);
    // Possa la taula en el DIV
    document.getElementById('taula').appendChild(tbl);
    matriuBinaria(rows, cols);
}

// esta funcion se guarda en una variable
let escribir = function escribir(event) {
    console.log("pepe",eve);
}
// matriz binaria
function matriuBinaria(matrix) {
    var matrix2 =[];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if(matrix2[0].style.backgroundColor == "white"){
                matrix2[i].push(0);
            }else{
                matrix2[i].push(1);
            }
        }
    }
    return matrix2;
}


