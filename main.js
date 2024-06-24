// // - 1º Atividade
// function fazerMedia(notas) {
//   let soma = 0;

//   for (let i = 0; i < notas.length; i++) {
//     soma += notas[i];
//   }

//   return soma / notas.length;
// }
// let notas = [10, 1, 8, 9];

// let media = fazerMedia(notas);
// console.log(media);

// // - 2° Atividade
// function verificarSituacao(media) {
//   if (media >= 7) {
//     document.write("Parabéns você passou na média!");
//   } else {
//     document.write("Infelizmente você está de recuperação.");
//   }
//   console.log(media);
// }

// //verificarSituacao(media);

// // - 3° Atividade
// let nomes = ["Paulo", "Santiago", "Pedro", "Henrique"];

// function listarNomes(nomes) {
//   nomes.forEach((nome) => {
//     document.write(nome + "<br/>");
//   });
// }

// // listarNomes(nomes);

// // - 4° Atividade
// let numTabuada = 8;

// for (let i = 0; i <= 10; i++) {
//   document.write(numTabuada + " x " + i + " = " + numTabuada * i + "<br/>");
// }

// // - 5° Atividade
// let nome = prompt("Qual o nome do aluno?");
// let idade = prompt("Qual a idade do aluno?");
// let serie = prompt("Qual a série do aluno?");
// let nomeEscola = prompt("Qual o nome da escola?");
// let materiaFavorita = prompt("Qual a sua matéria favorita?");
// let imprimirOuNao = confirm("confirmar os dados inseridos?");

// if (imprimirOuNao) {
//   document.write("Nome: " + nome + "<br/>");
//   document.write("Idade: " + idade + "<br/>");
//   document.write("Série: " + serie + "° <br/>");
//   document.write("Nome da escola: " + nomeEscola + "<br/>");
//   document.write("Matéria favorita: " + materiaFavorita + "<br/>");
// } else {
//   alert("Os dados não foram confirmados");
// }

// // - 6° Atividade
// let nomeMateria = prompt("Qual a matéria?");
// let controlador = 1;
// let arrayNotas = [];

// while (controlador <= 4) {
//   let notaEscolhida = Number(prompt(controlador + "° nota"));

//   arrayNotas.push(notaEscolhida);
//   controlador++;
// }

// let mediaNotas = fazerMedia(arrayNotas);
// let curso = {
//   materia: nomeMateria,
//   notas: arrayNotas,
// };

// verificarSituacao(mediaNotas);

// // - 7° Atividade
// let arrayNumeros = [2, 7, 4, 6, 1];

// function ordenar(arrayNumeros) {
//   let numeroMaior = 0;
//   for (let i = 0; i < arrayNumeros.length; i++) {
//     let isNumeroFinal = i >= arrayNumeros.length ? true : false;
//     debugger;
//     if (arrayNumeros[i] > numeroMaior && !isNumeroFinal) {
//       numeroMaior = arrayNumeros[i];
//     }
//   }

//   console.log("O maior número é " + numeroMaior);
// }

// ordenar(arrayNumeros);

let nomeDados = prompt("Qual o nome do aluno?");
let idadeDados = prompt("Qual a idade do aluno?");
let serieDados = prompt("Qual a série do aluno?");
let nomeEscolaDados = prompt("Qual o nome da escola?");
let materiaFavoritaDados = prompt("Qual a sua matéria favorita?");

let nomeId = document.getElementById("nome")
let idadeId = document.getElementById("idade")
let serieId = document.getElementById("serie")
let escolaId = document.getElementById("escola")
let materiaFavoritaId = document.getElementById("materiaFavorita") 

function pegarDadosDeAluno() {
nomeId.innerHTML = `<strong>Nome: </strong> ${nomeDados}`
idadeId.innerHTML = `<strong>Idade: </strong> ${idadeDados}`
serieId.innerHTML = `<strong>Série: </strong> ${serieDados}`
escolaId.innerHTML = `<strong>Escola: </strong> ${nomeEscolaDados}`
materiaFavoritaId.innerHTML = `<strong>Matéria Favorita: </strong> ${materiaFavoritaDados}`
}

pegarDadosDeAluno()

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
