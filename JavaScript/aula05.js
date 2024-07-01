//Variáveis em JS
//o comando para variável é let. Podemos usar também var.
let nome; // declarando a variável
nome = 'Pedro';

console.log("João nasceu em 1984.");
console.log("Em 2000 joão conheceu Maria.");
console.log("João casou-se com maria em 2012.");
console.log("Maria teve 1 filho com João em 2015.");
console.log("O filho de João se chama Eduardo.");

// /*Na necessidade de não ficarmos repetindo João várias vezes, se torna util a criação de uma variável que receberá o nome João. */

// console.log(nome, "nasceu em 1984.");
// console.log("Em 2000", nome,"conheceu Maria.");
// console.log(nome, "casou-se com maria em 2012.");
// console.log("Maria teve 1 filho com", nome, "em 2015.");
// console.log("O filho de", nome,"se chama Eduardo.");

//Agora podemos mudar o valor nome e usar todo o resto da estrutura


nome = 'qualquer coisa'; // inicializando a variável
console.log(nome);

//não podemos criar variáveis com palavras reservadas, exemplo let let.
//Precisamos criar nomes significativos.
//Não podemos começar o nome de uma variável com número.
//As variáveis não podem conter espaços ou traços.
//Se precisarmos colocar nome compostos usamos camelCase.
//As vaiáveis são case sensitive.
//Não podemos recriar variáveis com let.
//Não utilize var, utilize let.

let nomeCompleto = 'Pedro Henrique Martins Belo';
console.log(nomeCompleto)