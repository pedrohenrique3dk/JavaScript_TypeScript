//não podemos criar constantes com palavras reservadas, exemplo let let.
//Precisamos criar nomes significativos.
//Não podemos começar o nome de uma constante com número.
//As constantes não podem conter espaços ou traços.
//Se precisarmos colocar nome compostos usamos camelCase.
//As constantes são case sensitive.
//Não podemos recriar constantes com let.
//Não utilize var, utilize const.

const nome = 'João';
console.log(nome);

//não podemos modificar o valor da constante;
//Se quisermos mudar a variável, mudamos de const para let;

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const resultadoDuplicado = conta*2;
let resultadoTriplicado = conta*3;
resultadoTriplicado = resultadoTriplicado + 3;

console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

//dentro de aspas = string
//fora de aspas = number

console.log(typeof(primeiroNumero));

let number1 = '4';
let number2 = '76';
let soma = number1 + number2;
console.log(soma);

//quando somamos duas strings, estamos na verdade concatenando elas. També será concatenado string com int / float.