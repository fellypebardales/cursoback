// const user = "Luiz";

// user = "Luan";

var anosDeEstudo = 1;

function experiencia(anos) {
  if (anos <= 1) {
    return "Iniciante!";
  } else if (anos <= 3) {
    return "Intermediário!";
  } else if (anos <= 6) {
    return "Avançado!";
  } else {
    return "Jedi Master!";
  }
}

console.log(experiencia(anosDeEstudo));

function somar(a, b) {
  let resultado = a + b;
  return resultado;
}

let resultadoSoma = somar(5, 15);

console.log(resultadoSoma);

const somar2 = (a, b) => {
  let resultado = a + b;
  return resultado;
};

let resultadoSoma2 = somar2(5, 25);

console.log(resultadoSoma2);
