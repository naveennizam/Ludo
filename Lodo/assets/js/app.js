
function roll(){
    const firstRandomnym = Math.floor(Math.random() * 6 ) + 1 ;
const firstDiceimges = 'assets/images/Dice' +  firstRandomnym + '.png';

document.querySelectorAll('img')[0].setAttribute('src' ,firstDiceimges);


const secondRandomnym = Math.floor(Math.random() * 6 ) + 1 ;
const secondDiceimges = 'assets/images/Dice' +  secondRandomnym + '.png';

document.querySelectorAll('img')[1].setAttribute('src' ,secondDiceimges);

if (firstRandomnym > secondRandomnym ){
    document.querySelector("h1").innerHTML = " Player 1 won"

}
else if (firstRandomnym < secondRandomnym){
    document.querySelector("h1").innerHTML = " Player 2 won"

}
else {
    document.querySelector("h1").innerHTML = " Draw"
}
}
roll();