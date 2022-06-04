const grid = document.querySelector('#grid-container')

for(let i = 1; i <= 256; i++) {
    let div = document.createElement('div');  //This loop creates a div element and adds it to the  
    grid.appendChild(div);                    //end of the grid-container and it does this 256 times
                                              // which is 16*16
}

const divs = grid.querySelectorAll('div');    // this selects all 256 div's inside the grid div and
                                              // returns a node-list(an Array like object)
for(let i = 0; i < divs.length; i++) {
    if(i%2 === 0) {
        divs[i].addEventListener('mouseenter', () => {
            divs[i].style.backgroundColor = 'yellow'; 
        })
    } else if(i%2 > 0) {
        divs[i].addEventListener('mouseenter', () => {
            divs[i].style.backgroundColor = 'blue';
        })
    } 
}                                              