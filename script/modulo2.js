document.addEventListener("DOMContentLoaded",function(){
    
    document.querySelector("form").addEventListener("submit",function(e){

        e.preventDefault();

        controllaCampo(document.getElementById("nome"),3);
        controllaCampo(document.getElementById("email"),8);
        controllaCampo(document.getElementById("pass"),6);

     //   controllaEmail();
        console.log("Questo lo scrivo dopo la funzione");

    });//submit


});//DOMContentLoaded


function controllaCampo(campo,numMin){

    console.log(campo);

    let testo=campo.value.trim();
    if(testo.length<numMin){
        campo.classList.add("errore");
        campo
            .nextElementSibling
            .innerHTML="Devi scrivere almeno "+numMin+" lettere";
    }
    else{
        campo.classList.remove("errore");
    }

    /*
    let n=nome.value.trim(); //in questa variabile salvo il contenuto di nom

    if(n.length<3) //è un errore
    {
        console.log("Il nome è sbagliato");
        nome.classList.add("errore");
        nome.nextElementSibling.innerHTML="Devi scrivere almeno 3 lettere";
    }
    else{
        nome.classList.remove("errore");
    }
    */
}

/*
function controllaEmail(){

    let n=email.value.trim(); //in questa variabile salvo il contenuto di nom

    if(n.length<8) //è un errore
    {
        console.log("La mail è sbagliata");
        email.classList.add("errore");
        email.nextElementSibling.innerHTML="Devi scrivere almeno 8 lettere";
    }
    else{
        email.classList.remove("errore");
    }
}
*/