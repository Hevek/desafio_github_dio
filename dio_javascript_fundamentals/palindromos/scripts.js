function verifyPalindromes(string){
    if(!string) return; // Texto inválido, vazio ou não definido

    if(string.split("").reverse().join("") === string){
        return console.log("\nO texto inserido é um palíndromo. ");
    }else{
        return console.log("\nO texto inserido é um palíndromo. ");
    }
}

let readline = require('readline');
let texto = "";

let leitor = readline.createInterface({ input: process.stdin, output: process.stdout });
let confirmation = true;

while(confirmation){
    leitor.question("Digite um texto para verificar se é um palíndromo: \n", function(answer) {
        texto = answer;
        verifyPalindromes(texto);
    });
    leitor.question("Deseja continuar? S/N\n", function(answer){
        let invalidAnswer = true;
        while(invalidAnswer === true){
            switch(answer.toUpperCase){
                case 'S':
                    break;

                case 'N':
                    break;

                default:
                    break;
            }
        }
    });
}
leitor.close();