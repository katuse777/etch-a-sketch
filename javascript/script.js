const grid = document.getElementById('grid-container');

const button = document.querySelector('button');
button.addEventListener('click', number => {
    number = Number(prompt('How many Squares per side should the grid have?'));
    if (isNaN(number)) {
        return alert('Sorry, You have to insert a NUMBER');
    } else {
        grid.style.margin = 'auto';
        grid.style.display = 'grid';
        grid.style.height = '100vh';
        grid.style.gridTemplate = `repeat(${number}, ${number}fr)/ repeat(${number}, ${number}fr)`;
        grid.style.gap = '6px 6px';

        for (let i = 1; i <= number * number; i++) {
            let div = document.createElement('div');
            grid.appendChild(div);
        }
        const divs = grid.querySelectorAll('div');

        for (let i = 0; i < divs.length; i++) {
            if (i % 2 === 0) {
                divs[i].addEventListener('mouseenter', () => {    // this loop iterates through the divs node list
                    divs[i].style.backgroundColor = 'yellow';     // and adds an Event listener to ech item in the
                })                                                //in the list 
            } else if (i % 2 > 0) {
                divs[i].addEventListener('mouseenter', () => {
                    divs[i].style.backgroundColor = 'blue';
                })
            }
        }
    }
})