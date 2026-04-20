let scritta = 0;
function agguingiTesto() {
  if (scritta == 0) {
    document.getElementById("prova").innerHTML =
      "hai cliccato il paragrafo! adesso sirà aggiunto del testo";
    scritta++;
  } else {
    document.getElementById("prova").innerHTML = "";
    scritta--;
  }
}
function generaRiga(numero) {
  let riga = "";
  let num = numero + 1;
  for (let i = 0; i < 10; i++) {
    if ((num * (i + 1)) % 2 != 0) {
      riga += "<td class='dispari'>"; // Crea una cella con il prodotto di num e (i+1)
    }
    else{
      riga += "<td>"; // Crea una cella con il prodotto di num e (i+1)
    }
    riga += num * (i + 1);
    riga += "</td>"; 
  }
  return riga;
}
function generaTabella() {
  
  let tabella = "<table border='1'>";
  for (let i = 0; i < 10; i++) {
    tabella += "<tr>";  // Inizio di una nuova riga
    tabella += generaRiga(i); // Genera le celle per la riga i+1
    tabella += "</tr>"; // Fine della riga
    }
  tabella += "</table>";

  document.getElementById("tabella").innerHTML = tabella;
}

function generaAnni()
{
  Selezione=document.getElementById("anno");
  anno=1996;
  for(i=0;i<30;i++)
  {
    opzione=document.createElement("option");
    opzione.value=anno;
    opzione.text=anno;
    Selezione.appendChild(opzione);
    anno++;
  }
  
}
generaAnni();