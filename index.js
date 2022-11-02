var matrix = null;

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
}
