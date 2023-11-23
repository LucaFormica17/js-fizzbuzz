//BONUS
const list = document.getElementById('ul');

//MOSTRARE in console numeri da 1 a 100
for(let i=1; i<101; i++){
    let see;
    //CONDIZIONARE LA VISUALIZZAZIONE DEI NUMERI MULTIPLI DI 3, 5 e 3 && 5
    if(i%3 == 0 && i%5 == 0){
        see = `<li>fizzbuzz</li>`;
        console.log('fizzbuzz');
    }
    else if(i%5 == 0){
        see = `<li>fizz</li>`;
        console.log('fizz');
    }
    else if(i%3 == 0){
        see = `<li>buzz</li>`;
        console.log('buzz');
    }
    else{
        see = `<li>${i}</li>`;
        console.log(i);
    }
    list.innerHTML += see;
}

