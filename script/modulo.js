document.addEventListener("DOMContentLoaded",function(){
    
    document.querySelector("form").addEventListener("submit",function(e){

        e.preventDefault();
        //console.log(e);
        console.log("submit");


        let n=nome.value.trim(); //in questa variabile salvo il contenuto di nome
        console.log(n);
        console.log(n.length);

        if(n.length<3) //è un errore
        {
            console.log("Il nome è sbagliato");
            nome.classList.add("errore");
            //document.querySelector("span").innerHTML="Devi scrivere almeno 3 lettere";
            nome.nextElementSibling.innerHTML="Devi scrivere almeno 3 lettere";
        }
        else{
            nome.classList.remove("errore");
        }


        let mail=email.value.trim(); //in questa variabile salvo il contenuto di nome
        console.log(mail);
        console.log(mail.length);

        if(mail.length<8) //è un errore
        {
            console.log("La mail è sbagliata");
            email.classList.add("errore");
            //document.querySelector("span").innerHTML="Devi scrivere almeno 8 lettere";
            email.nextElementSibling.innerHTML="Devi scrivere almeno 8 lettere";
        }
        else{
            email.classList.remove("errore");
        }




    });//submit


});//DOMContentLoaded