let temp = JSON.parse(localStorage.getItem('usuario'));

//Array de objetos - notas
let arrayNotas = []

function novaLinha() {
  let curso = pegarMateriaEnotas();
  criarLinha(curso);
}

function fazerMedia(notas) {
  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  return soma / notas.length;
}

const mediasGerais = [];

function pegarMateriaEnotas() {
  let nomeMateria = prompt("Qual a matéria?");
  let controlador = 1;
  let arrayNotas = [];

  let arrayLocal = [];

  while (controlador <= 4) {
    let notaEscolhida = prompt(controlador + "° nota");

    notaEscolhida = Number(trocarVirgulaPorPonto(notaEscolhida));

    if (isNaN(notaEscolhida)) {
      alert("Você não inseriu um valor númerio para a nota. Por favor, insira novamente uma matérias e suas notas.");
      break;
    } else {
      arrayNotas.push(notaEscolhida);
      controlador++;
    }
  }

  if (arrayNotas.length === 4) {
    let mediaNotas = fazerMedia(arrayNotas);
    let curso = {
      materia: nomeMateria,
      notas: arrayNotas,
      media: mediaNotas
    };
    mediasGerais.push(curso.media);


    localStorage.setItem(`${curso.nomeMateria}`, JSON.stringify(curso.arrayNotas));
    let maior = calculaMaiorMedia();
    insereMaiorMedia(maior);

    return curso;
  } else {
    return null;
  }
}

function trocarVirgulaPorPonto(valorNota) {
  if (valorNota.includes(',')) {
    return valorNota.replace(',', '.');
  } else {
    return valorNota;
  }
}

function criarLinha(curso) {
  let tbody = document.querySelector("tbody");
  let linha = `
      <tr>
          <td>${curso.materia}</td>
          <td>${curso.notas[0].toFixed(1)}</td>
          <td>${curso.notas[1].toFixed(1)}</td>
          <td>${curso.notas[2].toFixed(1)}</td>
          <td>${curso.notas[3].toFixed(1)}</td>
          <td class="mediaMateria">${curso.media.toFixed(1)}</td>
      </tr>
  `;

  tbody.innerHTML += linha;


  let geralMediaGeral = calcMediaGeral(mediasGerais);
  insereMediaGeral(geralMediaGeral);
}


function calcMediaGeral(arrayMedias) {
  let media = arrayMedias.reduce(function (total, nota) {
    return total + nota;
  }, 0)
  return media / arrayMedias.length;
}

function insereMediaGeral(media) {
  let elementoMedia = document.querySelector('#media-geral');
  elementoMedia.innerHTML = `<b>${media.toFixed(1)}</b>`
}

//Linha inicial solicitada pelo exercício
function start() {
  let arrayInicial = [9.00, 8.55, 10.00, 7.88]
  let mediaInicial = fazerMedia(arrayInicial)

  let cursoInicial = {
    materia: "Matemática",
    notas: arrayInicial,
    media: mediaInicial
  }

  mediasGerais.push(cursoInicial.media);

  criarLinha(cursoInicial);
}

function caput() {
  let infoUser = document.querySelector('.info-aluno');
  let alunoLinha =`
    <p id="nome"><strong>Nome: </strong>${temp.nome}</p>
    <p id="idade"><strong>Idade: </strong>${temp.idade}</p>
    <p id="serie"><strong>Série: </strong>${temp.serie}</p>
    <p id="escola"><strong>Escola: </strong>${temp.escola}</p>
    <p id="materiaFavorita"><strong>Máteria Favorita: </strong>${temp.materia}</p>`;

  infoUser.innerHTML += alunoLinha;
}

function insereMaiorMedia(maior) {
  let mediaMaior = document.querySelector('.maior-media');
  let maiorMedia =`
  <h2>Maior Média entre as Matérias</h2>
  <p id="maior-media">A maior média entre as matérias é: ${maior}</p>`;

  mediaMaior.innerHTML = maiorMedia;
}

function calculaMaiorMedia() {

}

Window.onload = start();
Window.onload = caput();
