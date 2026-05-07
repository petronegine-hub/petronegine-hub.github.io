const CORRETTE1 ="SQL";
const CORRETTE2 =  "2";
const CORRETTE3 = "Dinamiche";
const CORRETTE4 = ["void", "char"];
const CORRETTE5 =  "BYTE";
const CORRETTE =["SQL", "2", "Dinamiche", ["void", "char"], "BYTE"]
function analizzaOggetto(obj) {
    console.log("--- Analisi Oggetto ---");
    
    // Controlliamo se è effettivamente un oggetto e non è null
    if (typeof obj !== 'object' || obj === null) {
        console.log(`L'elemento fornito non è un oggetto, è un: ${typeof obj}`);
        return;
    }

    // Cicliamo attraverso tutte le proprietà (chiavi) dell'oggetto
    for (let chiave in obj) {
        if (obj.hasOwnProperty(chiave)) {
            const valore = obj[chiave];
            const tipo = typeof valore;

            // Se il valore è un altro oggetto, lo segnaliamo in modo speciale
            if (tipo === 'object' && valore !== null) {
                console.log(`CHIAVE: [${chiave}] | TIPO: Oggetto/Array | VALORE: (Vedi sotto)`);
                console.dir(valore); // console.dir visualizza l'oggetto espandibile
            } else {
                console.log(`CHIAVE: [${chiave}] | TIPO: ${tipo} | VALORE: ${valore}`);
            }
        }
    }
    console.log("-----------------------");
}
        function controlaCampi()
        {
            if(document.getElementById("risp1").value==="")return false;

            if(document.getElementById("risp2").value==="")return false;

            let r3 = document.getElementsByName('risp3');
            let c=0;
            for (let index = 0; index < r3.length; index++) {
                const element = r3[index];
                if (element.checked)c++;
                
            }
            if (c===0)return false; 

            let r4 = document.getElementsByName('risp4');
            let c2=0;
            for (let i = 0; i < r4.length; i++) {
                const element = r4[i];
                if (element.checked)c2++;
                
            }
            if (c2===0)return false; 

            if(document.getElementById("risp5").value==="")return false;

            return true;
        }
        function elabora()
        {
            let punti = 0;
            if(controlaCampi()===false)
            {
                alert("non hai compiloto tutti i campi")
                return;
            }
            // D1: Text
            if (document.getElementById('risp1').value.toUpperCase() === CORRETTE[0]) punti++;

            // D2: Select
            if (document.getElementById('risp2').value === CORRETTE[1]) punti++;

            // D3: Radio
            let r3 = document.getElementsByName('risp3');

            for (let index = 0; index < r3.length; index++) 
            {
                const element = r3[index];
                if(element.checked)
                {
                if (element.value === CORRETTE[2]) punti++;
                }
            }


            // D4: Checkbox (Multipla: void e char)
            let r4 = document.getElementsByName('risp4');
            for (let index = 0; index < r4.length; index++) {
                const element = r4[index];
                console.log(index);
                                        analizzaOggetto(index);
                if(element.checked)
                {
                    for (let i = 0; i < CORRETTE[3].length; i++) {
                        const elementC = CORRETTE[3][i];
                       // Usiamo trim() per gli spazi e toLowerCase() per ignorare le maiuscole
                        analizzaOggetto(element);
                        if (element.value.trim().toLowerCase() === elementC.value.trim().toLowerCase()) {
                        punti++;
                        }
                    }
                }
                
            }
            // D5: Text
            if (document.getElementById('risp5').value.toUpperCase() === CORRETTE[5]) punti++;

            document.getElementById('punteggio').value = punti;
            return punti;
        }

        function calcolaCodice() {
            // Validazione obbligatoria
            let cog = document.getElementById('cognome').value.trim();//trim=toglie gli spazi al inzio e alla fine 
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
            let parte4 = aa.substring(2, 2);

            let codice = parte1 + parte2 + parte3 + parte4;
            
            // Punteggio x 10 come richiesto
            let puntiEsame = elabora() * 10;
            
            document.getElementById('codiceUtente').value = `Cod: ${codice} - Punti: ${puntiEsame}`;
        }
