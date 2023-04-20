let url="dados/receita_federal.xml";
let div = document.querySelector("#cards");

fetch(url)
    .then((resp) => resp.text())
    .then((str) => (new DOMParser().parseFromString(str, "text/xml")))
    .then(function(dados){
        div.innerHTML = "";
        let pessoas = dados.querySelectorAll("contribuinte")
        for (let pessoa of pessoas){
            montaCard(pessoa);
        }
    });

function montaCard(pessoa){
    console.log(pessoa)
    div.innerHTML += `<div class='card'>
                    <img src='${pessoa.childNodes[7].childNodes[0].nodeValue}'>
                    <h3>${pessoa.childNodes[2].childNodes[0].nodeValue}</h3>
                    <p>CPF:${pessoa.childNodes[0].childNodes[0].nodeValue}</p>
                    <div class='contato'>
                    Cel:${pessoa.childNodes[5].childNodes[0].childNodes[0].nodeValue}
                    <br>
                    E-mail:${pessoa.childNodes[5].childNodes[2].childNodes[0].nodeValue}
                    </div>
                    </div>`

}