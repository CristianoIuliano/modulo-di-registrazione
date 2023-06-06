document.addEventListener("DOMContentLoaded",function(){
    
    document.querySelector("form").addEventListener("submit",function(e){

        e.preventDefault();

        let inputs=document.querySelectorAll("input");
        console.log(inputs);

        for(let i=0;i<inputs.length;i++)
        {
            /*console.log(i);
            console.log(inputs[i]);*/
            controllaCampo(inputs[i],parseInt(inputs[i].getAttribute("data-min")));
        }

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

}
