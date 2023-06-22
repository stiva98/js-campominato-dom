let square = 100;
const arrBombRandom = [];
let isGameRunning = true
let start = 0;
let cell = 0;
let maxNumber = 0;
const gridContainer = document.querySelector('.container');
const myForm = document.querySelector('.my-form');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    gridContainer.innerHTML = '';
    start ++;
    if(start == 2){
        location.reload();
    }
    const mySelect = document.getElementById('difficults').value;
    //console.log(mySelect)
    if(mySelect == 'easy'){
        square = 100;
        const bomb = 16;
        maxNumber = square - bomb;
        while (arrBombRandom.length < bomb){
            const newBomb = randomNumber(1,square);
            if (arrBombRandom.includes(newBomb) == false) {
                arrBombRandom.push(newBomb);
                console.log(newBomb)
            }
        }
    }else if (mySelect == 'medium'){
        square = 81
        const bomb = 16;
        maxNumber = square - bomb;
        while (arrBombRandom.length < bomb){
            const newBomb = randomNumber(1,square);
            if (arrBombRandom.includes(newBomb) == false) {
                arrBombRandom.push(newBomb);
                console.log(newBomb)
            }
        }
    }else {
        square = 49;
        const bomb = 16;
        maxNumber = square - bomb;
        while (arrBombRandom.length < bomb){
            let newBomb = randomNumber(1,square);
            if (arrBombRandom.includes(newBomb) == false) {
                arrBombRandom.push(newBomb);
                console.log(newBomb)
            }
        }
    }

    for (let i = 1; i <= square; i++) {
        const newCell = document.createElement('div');
        if(mySelect == 'easy') {
            newCell.classList.add('cell');
        }else if (mySelect == 'medium'){
            newCell.classList.add('cell-2');
        }else {
            newCell.classList.add('cell-3');
        }
        newCell.append(i);

        newCell.addEventListener('click', function () {
            if(isGameRunning === false) {
                // Stoppa il gioco
                return
            }
                console.log(newCell.innerHTML);
                if(arrBombRandom.includes(i)){
                    newCell.classList.remove('new-bg');
                    newCell.classList.add('bomba');
                    isGameRunning = false;
                    alert('Hai perso!')
                }else {
                    newCell.classList.add('new-bg');
                    isGameRunning = true;
                    cell++;
                    if (cell == maxNumber){
                        return alert('hai vinto');
                    }
                }
        })
     
        gridContainer.append(newCell);
      
        

    }
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', function (){
    location.reload();

})





function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
