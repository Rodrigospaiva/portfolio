// Recebimento das variáveis
const nascimento = new Date('1953-09-18');
const dataAtual = new Date();

// Atribuição de timestamp
const data1 = nascimento.getTime();
const data2 = dataAtual.getTime();

const diferenca = data2 - data1;

// Conversões de timestamp para tempo e data
const diferencaSegundos = diferenca / 1000;
const diferencaMinutos = diferencaSegundos / 60;
const diferencaHoras = diferencaMinutos / 60;
const diferencaDias = diferencaHoras / 24;
const diferencaMeses = diferencaDias / 12;

const idade = diferencaDias / 365;

console.log('A idade é ' + idade.toFixed(2) + ' anos.');
console.log('Correspondente a ' + diferencaMeses.toFixed() + ' meses ou '+ diferencaDias.toFixed() + 'dias.');