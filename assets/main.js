let nome = localStorage.getItem('nome');
let idade = localStorage.getItem('idade');
let serie = localStorage.getItem('serie');
let escola = localStorage.getItem('escola');
let materia = localStorage.getItem('materia');


function novaLinha() {
  let curso = pegarMateriaEnotas();
  criarLinha(curso);
}

function fazerMedia (notas) {
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
  let media = arrayMedias.reduce(function(total, nota) {
    return total + nota;
  }, 0)
  return media / arrayMedias.length;
}

function insereMediaGeral(media) {
  let elementoMedia = document.querySelector('#media-geral');
  elementoMedia.innerHTML = `<b>${media.toFixed(1)}</b>`
}
