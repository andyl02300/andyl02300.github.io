function surligne(champ, erreur)
{
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}
function verifNom(champ)
{
    var regex = /^[a-zA-Z]+$/;
    if (!regex.test(champ.value))
    {
        surligne(champ, true);
        return false;
    } else
    {
        surligne(champ, false);
        return true;
    }
}

function verifMail(champ)
{
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (!regex.test(champ.value))
    {
        surligne(champ, true);
        return false;
    } else
    {
        surligne(champ, false);
        return true;
    }
}

// La validation n'est pas effective sur tous les champs
function verifForm(f)
{
    var mailOk = verifMail(f.email);
    var nomOk = verifNom(f.nom);
    var prenomOk = verifNom(f.prenom);


    if (mailOk === true && nomOk === true && prenomOk === true) {
        alert("formulaire envoyer");
        return true;
    } else
    {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}