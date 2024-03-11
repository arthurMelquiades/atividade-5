/*
  Aviso: se você executar, acidentalmente, um loop infinito, faça o seguinte:
  
  - Feche o navegador;
  - Desconecte o servidor;
  - Modifique o seu código para que o looping infinito não aconteça;
  - E só então, levante o servidor novamente.
*/

/*
  01

  - Utilizando um while loop, exiba no console todos os números entre 0 e 5,  
    inclusive esses dois.
  - O resultado deve ser:
    0
    1
    2
    3
    4
    5
*/
// Inicializando o contador
let contador = 0;

// Usando um while loop para exibir os números de 0 a 5
while (contador <= 5) {
    console.log(contador);
    contador++;
}



/*
  02 - Comente a declaração da let e o loop acima e:

  - Utilizando um for loop, faça o mesmo que foi pedido no exercício 01.
*/



/*
  03 - Comente o loop acima e:

  - Escreva um loop (for ou while) que exiba a frase abaixo no console;
  - Substitua o "X" pela informação correta;
  - "X" deve começar em 1 na 1ª exibição da frase e em 10 na última;
  - Exiba a frase 10x no console.

  "Esta é a Xª vez que esta frase é exibida no console."
*/
// Loop para exibir os números de 0 a 5
/*
let contador = 0;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
*/

// Loop para exibir a frase com o valor de X variando de 1 a 10
for (let X = 1; X <= 10; X++) {
    console.log("Esta é a " + X + "ª vez que esta frase é exibida no console.");
}



/*
  04 - Comente o loop acima e:

  - Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à  
    ela um array vazio;
  - Adicione no array que a "upperCaseCities" armazena as cidades do array  
    cities com todas as letras maiúsculas, utilizando o for loop.
  - Para ver se deu certo, exiba o upperCaseCities no console.
*/

const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
// Array de cidades

// Array para armazenar as cidades em letras maiúsculas
let upperCaseCities = [];

// Loop for para percorrer o array de cidades
for (let i = 0; i < cities.length; i++) {
    // Adiciona cada cidade em letras maiúsculas ao array upperCaseCities
    upperCaseCities.push(cities[i].toUpperCase());
}

// Exibe o array com as cidades em letras maiúsculas no console
console.log(upperCaseCities);

/*
  05 - Comente o console.log acima e:

  - Após a const names, utilize um for loop para gerar um template HTML;
  - Exiba no console o template HTML que você gerou;
  - O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/

const names = ['João Grilo', 'Chicó', 'Rosinha']
// Array de nomes

// Variável para armazenar o template HTML
let htmlTemplate = '';

// Loop for para gerar o template HTML
for (let i = 0; i < names.length; i++) {
    // Adiciona cada nome envolto em uma tag <li> ao template HTML
    htmlTemplate += '<li>' + names[i] + '</li>';
}


console.log(htmlTemplate);

/*
  06 - Comente o console.log acima e:

  - Após a const numbers, utilize um for loop para somar todos os números do  
    array;
  - Exiba no console um boolean indicando se o total dessa soma é 337;
  - O console deve exibir true.
*/

const numbers = ['91', '5', '30', '97', '83', '31']
// Array de números representados como strings

// Variável para armazenar o total da soma dos números
let  = 0;

// Loop for para somar todos os números do array
for (let i = 0; i < numbers.length; i++) {
    // Converte cada elemento do array para número e adiciona ao total
    totalSum += parseInt(numbers[i]);
}

// Verifica se o total da soma é igual a 337 e exibe o resultado no console
console.log(totalSum === 337);

/*
  07 - Comente o console.log acima.

  Este exercício é um pouco mais complexo que os anteriores. Não se preocupe  
  muito caso você não acerte ele. Apenas tente resolvê-lo com o conhecimento  
  adquirido até aqui.

  - O JavaScript permite você criar arrays dentro de um outro array. Isso é  
    chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o  
    array "arrays" abaixo é uma sintaxe válida. Cada array dentro do array  
    "arrays" é um item;
  - Abaixo do array "arrays", utilizando o for loop, some todos os números  
    destes arrays.
  - Após o for, exiba no console o resultado, que deve ser 218.

  Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
*/

const arrays = [
  [4, 32, 8],
  [64, 8, 32],
  [8, 32, 16],
  [2, 8, 4]
]
// Array de arrays (nested arrays)

  // Variável para armazenar o total da soma dos números
  let totalSum = 0;
  
  // Loop externo para percorrer os arrays aninhados
  for (let i = 0; i < arrays.length; i++) {
      // Loop interno para percorrer os números de cada array
      for (let j = 0; j < arrays[i].length; j++) {
          // Adiciona cada número ao total
          totalSum += arrays[i][j];
      }
  }
  
  // Exibe o total da soma no console
  console.log(totalSum);
  