# ttt

Tik-Tak-Toe Game

Functionality:

- Player vs computer select and 'X' or 'O' selection.
- Game board generated
- Clicking on board corresponds to turn (i.e if x goes first the next move will be O)
- Win/lose/draw state and corresponding alerts
- Restart game button

Player:

- Initial screen to record player name
- holds information in object (factory?) about name and selection (X or O) 

Board:
- stored as an array inside of an object(gameboard)
- Render board by looping through array >> create 9 divs?
- Function >> allows players to mark specific block on board
           >> ties it to the DOM
           >> logic/if statements to prevent marking the same space

Game:
- Function >> gameState, checks if there is a win, loss or draw.
           >> uses array index to check if 3 blocks are the same eg. [0,1,2] === 'x' return X player = 'Sarah' = Sarah is the winner


Restart/start:

- Renders clear game board
- Presented as start button on initial screen and then as restart button on the game screen.


Problems:

- figure out how to compare palyermoves and winLines to create winstate
solution xx use JSON.stringify to run through all winLines and check against player1/2Moves??

solution >> apply 'x' and 'o' classes to clicked boxes and then check if all elements ahve same class using index and then compare to winLines