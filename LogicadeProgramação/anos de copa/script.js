const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const copasDoMundo = [
  1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974,
  1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018
];

function verificarCopaDoMundo(ano) {
  return copasDoMundo.includes(ano);
}

rl.question('Digite o ano da Copa do Mundo: ', (ano) => {
  const anoCopa = parseInt(ano);
  if (verificarCopaDoMundo(anoCopa)) {
    console.log(`${anoCopa} é um ano de Copa do Mundo válido!`);
  } else {
    console.log(`${anoCopa} não é um ano de Copa do Mundo válido.`);
  }
  rl.close();
});