function soma(a, b){
    let output = '';
    if(a == b){
        output += `Os números ${a} e ${b} são iguais. `;
    } else{
        output += `Os números ${a} e ${b} não são iguais. `;
    }
    if(a + b < 10){
        output += `A sua soma é ${a+b}, que é menor que 10 e menor que 20. `;
    } else if(a + b > 20){
        output += `A sua soma é ${a+b}, que é maior que 10 e maior que 20. `;
    } else{
        output += `A sua soma é ${a+b}, que é maior que 10 e menor que 20. `;
    }
}

console.log(soma(1, 5));