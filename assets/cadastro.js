const enviar = document.querySelector('#btn-env')

function handleCEP(){
    const inputCep = document.querySelector('#cep').value;
    const retorno = document.querySelector('#invalid')

    const viaCep = fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
    viaCep.then(r => r.json())
    .then(body => {
        console.log("Processando..");
        document.querySelector('#estado').setAttribute('placeholder', `${body.uf}`);
        document.querySelector('#cidade').setAttribute('placeholder', `${body.localidade}`);
        document.querySelector('#rua').setAttribute('placeholder', `${body.logradouro}`);
        retorno.innerHTML = "";
        retorno.className = "";

    })
    .catch(() => {
        retorno.innerHTML = "CEP inválido!";
        retorno.className = "alerta alert alert-danger";
    })
    .finally(()=>{
        console.log("CEP encontrado!")
    })
}

enviar.addEventListener('click', handleCEP)