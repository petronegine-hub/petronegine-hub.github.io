const CORRETTE = ["SQL", "2", "Dinamiche", "void", "char", "BYTE"];

        function elabora() {
            let punti = 0;

            // D1: Text
            if (document.getElementById('risp1').value.toUpperCase() === CORRETTE[0]) punti++;

            // D2: Select
            if (document.getElementById('risp2').value === CORRETTE[1]) punti++;

            // D3: Radio
            let r3 = document.querySelector('input[name="risp3"]:checked');
            if (r3 && r3.value === CORRETTE[2]) punti++;

            // D4: Checkbox (Multipla: void e char)
            let cbVoid = document.querySelector('input[value="void"]').checked;
            let cbInt = document.querySelector('input[value="integer"]').checked;
            let cbChar = document.querySelector('input[value="char"]').checked;
            if (cbVoid && !cbInt && cbChar) punti++;

            // D5: Text
            if (document.getElementById('risp5').value.toUpperCase() === CORRETTE[5]) punti++;

            document.getElementById('punteggio').value = punti;
            return punti;
        }

        function calcolaCodice() {
            // Validazione obbligatoria
            let cog = document.getElementById('cognome').value.trim();
            let nom = document.getElementById('nome').value.trim();
            let aa = document.getElementById('anno').value.toString();
            let mm = document.getElementById('mese').value;

            if (cog === "" || nom === "" || aa === "") {
                alert("Compilare Cognome, Nome e Anno!");
                return;
            }

            // Elaborazione codice (3 cog, 3 nom, 3 mese, 2 anno)
            let parte1 = cog.substring(0, 3).toUpperCase();
            let parte2 = nom.substring(0, 3).toUpperCase();
            let parte3 = mm.substring(0, 3).toUpperCase();
            let parte4 = aa.substring(aa.length - 2);

            let codice = parte1 + parte2 + parte3 + parte4;
            
            // Punteggio x 10 come richiesto
            let puntiEsame = elabora() * 10;
            
            document.getElementById('codiceUtente').value = `Cod: ${codice} - Punti: ${puntiEsame}`;
        }
