/// Variables //////////////////////////////////////////////////////////////////

let   player1 = [], player2 = [], count = 0, winner = 0, player = 1, computer = false, easy = true,

      remaining =[1,2,3,4,5,6,7,8,9]

const allGrids = '#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9',

      winArr = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]]

/// Checks Win /////////////////////////////////////////////////////////////////

const checkWin = function(player) {
  for (i = 0; i < winArr.length; i++) {

    const w  = winArr[i];
    const p1 = player1;
    const p2 = player2;
    const p  = player;

       if ( p=== 'player1' && p1.includes( w[ 0 ] ) && p1.includes( w[ 1 ] ) && p1.includes( w[ 2 ] )) {
         winner = 1;
         win(p)

       } else if ( p === 'player2' && p2.includes( w[ 0 ] ) && p2.includes( w[ 1 ] ) && p2.includes( w[ 2 ] )) {
         winner = 1;
         win(p)

       } else if (remaining.length === 0 && winner === 0) {
         win('draw')

    }
  }
}

/// Splice Function returning value to p1 and p2 arrays ////////////////////////

  const spliceFunc = function(num) {

    const index = remaining.indexOf(num)
    remaining.splice(index, 1)

}
