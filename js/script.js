//MOSTRARE in console numeri da 1 a 100
for(let i=1; i<101; i++){
    //CONDIZIONARE LA VISUALIZZAZIONE DEI NUMERI MULTIPLI DI 3, 5 e 3 && 5
    if(i%3 == 0 && i%5 == 0){
        console.log(i+'fizzbuzz');
    }
    else if(i&5 == 0){
        console.log(i+'fizz');
    }
    else if(i%3 == 0){
        console.log(i+'buzz');
    }
    else{
        
        console.log(i);
    }
}



//BONUS
const list = document.querySelector('ul');
for(i=1; 1<101; i++){
let li = document.createElement('li'); //createelement crea un elemento html)
    li.setAttribute('id', `list-item-${i}`);
    li.innerHTML = `Voce lista ${i}`;
    list.appendChild(li);
    console.log(i);
}