let square = 100;
const gridContainer = document.querySelector('.container');
const myForm = document.querySelector('.my-form');
myForm.addEventListener('submit', function(event) {
    event.preventDefault()
    gridContainer.innerHTML = '';

    const mySelect = document.getElementById('difficults').value;
    //console.log(mySelect)
    if(mySelect == 'easy'){
       square = 100; 
    }else if (mySelect == 'medium'){
       square = 81
    }else {
       square = 49;
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
            newCell.classList.toggle('new-bg');
            console.log(newCell.innerHTML);
        })
     
        gridContainer.append(newCell);

    }
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', function (){
    gridContainer.innerHTML = '';

})

//Generazione di 16 numeri casuali e non ripetuti nella stessa cella

const bomb = 16;

const arrBombRandom = [];
while (arrBombRandom.length < bomb){

    const newBomb = randomNumber(1,100);
    if (arrBombRandom.includes(newBomb) == false) {
        arrBombRandom.push(newBomb);
        console.log(newBomb)
    }
}


16


function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
