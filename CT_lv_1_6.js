function solution(board, moves) {
  var answer = 0;
  let arr = new Array();

  for (let l = 0; l < moves.length; l++) {
    let i = 0;
    let a = moves[l] - 1;
    while (i < 5) {
      if (board[i][a] == 0) {
        i++;
      } else {
        arr.push(board[i][a]);
        board[i][a] = 0;
        break;
      }
    }
    console.log(arr);
    if (arr[arr.length - 1] == arr[arr.length - 2]) {
      arr.pop();
      arr.pop();
      answer = answer + 2;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
//크레인 인형뽑기 게임 문제
