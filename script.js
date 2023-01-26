/* eslint-disable */

const afunction = (function () {

    const playerProps = (name, mark, turn) => {
        return {name, mark, turn}
    }

    const player1 = playerProps ('Scott', 'X', true);
    const player2 = playerProps ('Dean', 'O', false);

    
    let board = [];
    let playerTurn
    let currentClass = playerTurn ? 'player1' : 'player2'
    let count = 0;
    let player1Moves = [];
    let player2Moves = [];


    let winLines = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,7],
        [3,4,5],
        [6,7,8],
    ]

    function playerState() {

        if (player1.turn === true) {
            playerTurn = true
        }

        else if (player1.turn ===false) {
            playerTurn = false
        };

    }

    function checkWin(currentClass) {
        const cellElements = document.querySelectorAll('#box');

        return winLines.some(combination => {
            return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
            })
        })     
    }

    const container = document.querySelector('#container');

        for (let i = 0; i < 9; i++) { 
         board.push('');
        }

        board.forEach((item, index) => {
            const box =  document.createElement('div');
            box.setAttribute('id', 'box')
            container.appendChild(box);


            box.addEventListener('click', () => { 
               
                if (player1.turn===true && box.textContent === '') {
                    
                    box.textContent = player1.mark;
                    box.classList.add('player1');

                    playerState()

                    player1.turn = false;
                    player2.turn = true;   

                    console.log(playerTurn)
                    console.log(checkWin())
                }

                else if (player2.turn===true && box.textContent === '') {

                    box.textContent = player2.mark;
                    box.classList.add('player2');

                    playerState()

                    player1.turn = true;
                    player2.turn = false;

                    console.log(playerTurn)
                }

                else {
                    return
                }


/*                if (player1Moves.length > 4) {

                    console.log('now');
            
                    for (let i = 0; i< winLines.length; i++) {
                        const possible = winLines[i];
                        let player1Check = possible.every((item) => player1Moves.sort().includes(item));
                        let player2Check = possible.every((item) => player2Moves.sort().includes(item));
            
                        console.log(player1Check);
                        console.log(player2Check);
                    }
                }
            
                else {
                    return
                }
*/                
        });
    });

})();