const enviar = document.querySelector('#btn-env')

function handleCEP(){
    const inputCep = document.querySelector('#cep').value;
    const retorno = document.querySelector('#invalid')

    const viaCep = fetch(`https://viacep.com.br/ws/${inputCep}/json/`);
    viaCep.then(r => r.json())
    .then(body => {
        retorno.innerHTML = "";
        retorno.className = "";

        document.querySelector('#estado').setAttribute('placeholder', `${body.uf}`);
        document.querySelector('#cidade').setAttribute('placeholder', `${body.localidade}`);
        document.querySelector('#rua').setAttribute('placeholder', `${body.logradouro}`);

        let nome = document.querySelector('#nome').value;
        let idade = document.querySelector('#idade').value;
        let serie = document.querySelector('#serie').value;
        let escola = document.querySelector('#escola').value;
        let materia = document.querySelector('#materia').value;

        localStorage.setItem("nome", nome);
        localStorage.setItem("idade", idade);
        localStorage.setItem("serie", serie);
        localStorage.setItem("escola", escola);
        localStorage.setItem("materia", materia);

        window.location.href = './notas.html';
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