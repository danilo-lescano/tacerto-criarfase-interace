function palavra(el){
    if(el.dataset.flag === "false"){
        el.dataset.flag = "true";

        var node = document.createElement("input");
        node.classList.add("palavra"); 
        node.type = "text";
        node.dataset.flag = false;
        node.onchange = function(){
            palavra(this);
        };
        document.getElementById("palavra").appendChild(node);
    }
    else if(!el.value)
        document.getElementById("palavra").removeChild(el);
}
function palavraE(el){
    if(el.dataset.flag === "false"){
        el.dataset.flag = "true";

        var node = document.createElement("input");
        node.classList.add("palavraE");
        node.type = "text";
        node.dataset.flag = false;
        node.onchange = function(){
            palavraE(this);
        };
        document.getElementById("palavraE").appendChild(node);
    }
    else if(!el.value)
        document.getElementById("palavraE").removeChild(el);
}
function enviar(){
    var arr1 = document.getElementsByClassName("palavra");
    var arr2 = document.getElementsByClassName("palavraE");

    var palavras = [];

    for (var i = 0; i < arr1.length-1; i++) {
        palavras[palavras.length] = {
            palavra: arr1[i].value,
            certo: true
        }
    }
    for (var i = 0; i < arr2.length-1; i++) {
        palavras[palavras.length] = {
            palavra: arr2[i].value,
            certo: true
        }
    }
    if(palavras.length){
        document.getElementById("modal").style.display = "block";
        document.getElementById("h3palavra").innerHTML = palavras[palavras.length-1].palavra;
    }
    var modalBtn = document.getElementById("modalBtn");
    modalBtn.onclick = function(){
        nextPalavra(palavras);
    }
}


var PALAVRAS = []; //GLOBAL
function nextPalavra(palavras){
    var dica = document.getElementById("dica").value;
    var nivel = document.getElementById("nivel").value;
    document.getElementById("dica").value = "";
    document.getElementById("nivel").value = "";

    palavras[palavras.length-1].dica = dica;
    palavras[palavras.length-1].nivel = nivel;

    PALAVRAS[PALAVRAS.length] = palavras[palavras.length-1];

    if(palavras.length){
        palavras.pop();
        modalBtn.onclick = function(){
            nextPalavra(palavras);
        };
        if(!palavras.length){
            document.getElementById("modal").style.display = "none";
            console.log(PALAVRAS);
        }
        else
            document.getElementById("h3palavra").innerHTML = palavras[palavras.length-1].palavra;
    }

}