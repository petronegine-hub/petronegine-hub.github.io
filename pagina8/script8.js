function conferma() {
    // Prendo i valori dai campi
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let part = document.getElementById("partenza").value;
    let dest = document.getElementById("destinazione").value;
    let g = document.getElementById("giorno").value;
    let m = document.getElementById("mese").value;
    let a = document.getElementById("anno").value;


    let okNome = validaTesto(nome);
    let okCognome = validaTesto(cognome);

    if (okNome == false || okCognome == false) {
        alert("Dati passeggero non validi");
        return;
    }


    if (part == "" || dest == "" || part == dest) {
        alert("Città non valide");
        return;
    }

    if (g < 1 || g > 31 || a < 2026 || g == "" || a == "") {
        alert("Data non valida");
        return;
    }


    let area = document.getElementById("riepilogo");
    area.innerHTML = "<h2>Riepilogo</h2>" +
                    "<b>Passeggero:</b> " + nome + " " + cognome + "<br>" +
                    "<b>Partenza:</b> " + part + "<br>" +
                    "<b>Destinazione:</b> " + dest + "<br>" +
                    "<b>Data:</b> " + a + "-" + m + "-" + g;
}


function validaTesto(stringa) {
    if (stringa.length < 3) {
        return false;
    }

        let lettera = stringa[0]; 
        if (i == 0) {
            if (!(lettera >= 'A' && lettera <= 'Z')) {
                return false;
            }
        }
    return true;
}