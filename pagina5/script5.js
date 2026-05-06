function registato()
{
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let codiceFiscale = document.getElementById("codiceFiscale").value;
    let controllo = controllaCodiceFiscale(codiceFiscale);
    let controloCampi = controlloCompilazioneCampi();

    if(controllo && controloCampi)
    {
        if (nome=="" || cognome=="") 
            {
                alert("Il nome e il cognome sono obbligatori.");
                return false;
            }
        alert("Gentile sig./sig.ra " + cognome + " " + nome + ",la ringraziamo per la registrazione.");
    }
}

function controllaCodiceFiscale(codiceFiscale)
{
    if(codiceFiscale.length != 16)
    {
        alert("Il codice fiscale deve essere lungo 16 caratteri.");
        return false;
    }
    else
    {
        for(let i = 0; i < codiceFiscale.length; i++)
        {
            let char = codiceFiscale.charAt(i);
            if(i>=0 && i<=5)
            {
                if(!(char >= 'A' && char <= 'Z'))
                {
                    alert("Il codice fiscale deve iniziare con 6 lettere maiuscole.");
                    return false;
                }
            }
            else if(i>=6 && i<16)
            {
                if(!((char >= '0' && char <= '9')||(char >= 'A' && char <= 'Z')))
                {
                    alert("Il codice fiscale deve avere caratteri alfanumerici dopo le prime 6 lettere.");
                    return false;
                }
            }
        }
        return true;
    }
}

function controlloCompilazioneCampi()
{
    let controllo=true;
    if ( !document.getElementById("femmina").checked && !document.getElementById("maschio").checked )
    {  
    controllo=false;
    alert("Seleziona un sesso.");
    }

    let anno=document.getElementById("anno").value;

    if(anno=="")
    {
        alert("Seleziona un anno di nascita.");
        controllo=false;
    }
    let accetta = document.getElementById("accetta").checked;
    if(accetta==false)
    {
        alert("Devi accettare i termini e le condizioni di servizio.");
        controllo=false;
    
    }
    return controllo;
    }

    // dati angrafici, data di nascita, domande, esito, basta che sianno dei semplici h2