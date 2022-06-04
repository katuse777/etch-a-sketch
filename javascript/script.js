const grid = document.getElementById('grid-container');

function random() {
    return Math.floor(Math.random()*256);     // this function returns a random number between 0 and 255
}

const button = document.querySelector('button');
button.addEventListener('click', number => {       
    number = Number(prompt('How many Squares per side should the grid have?'));  //this callback function receives a number 
    if (isNaN(number)) {                                              // from the prompt and checks if it really did receive
        return alert('Sorry, You have to insert a NUMBER');           // a number and if so, the function will create a grid
    } else {                                                         //and the dimensions of this grid will be determined by
        grid.style.border = '1px solid black';                       // the number received from the prompt 
        grid.style.width = '80%';
        grid.style.margin = 'auto';
        grid.style.display = 'grid';
        grid.style.height = '100vh';
        grid.style.gridTemplate = `repeat(${number}, ${number}fr)/ repeat(${number}, ${number}fr)`;
        grid.style.gap = '6px 6px';

        for (let i = 1; i <= number * number; i++) {              //this loop creates a div element and appends it to the grid
            let div = document.createElement('div');              // how many times the loop is ran is the square of the number
            grid.appendChild(div);                                // received from the prompt
        }
        const divs = grid.querySelectorAll('div');

        for (let i = 0; i < divs.length; i++) {
            if (i % 2 === 0) {
                divs[i].addEventListener('mouseenter', () => {    
                    divs[i].style.backgroundColor = `rgb(${random()},${random()},${random()})`;  // this loop runs through the node-list returned by
                })                                                                               // selecting all the divs in the grid and adds
            } else if (i % 2 > 0) {                                                             //an eventlistener to each item for when you hover over 
                divs[i].addEventListener('mouseenter', () => {                                  // the div a random backgroundColor will be apllied to 
                    divs[i].style.backgroundColor = `rgb(${random()},${random()},${random()})`; // that div item
                })
            }
        }
    }
})