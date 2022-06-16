let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

document.getElementById('minus_btn').addEventListener('click', function(){main('minus')});
document.getElementById('plus_btn').addEventListener('click', function(){main('plus')});
document.getElementById('random_btn').addEventListener('click', function(){main('random')});

function main(plus_minus_random){
    switch(plus_minus_random){
        case 'plus':
            increment();
        break;
        case 'minus':
            decrement();
        break;
        case 'random':
            generateRandomNum();
        break;
    }
    if(currentNumber > 0){
        currentNumberWrapper.style.color = 'lightgreen';
    } else if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    } else{
        currentNumberWrapper.style.color = 'white';
    }
}

function increment(){
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function generateRandomNum(){
    min = Math.ceil(-100);
    max = Math.floor(100);
    currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    currentNumberWrapper.innerHTML = currentNumber;
}