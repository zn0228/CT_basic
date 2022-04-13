function solution(arr1, arr2) {
  const ass = [];

  for (let i = 0; i < arr1.length; i++) {
    const assss = [];
    for (let l = 0; l < arr1[1].length; l++) {
      let asss = arr1[i][l] + arr2[i][l];

      assss.push(asss);
    }
    ass.push(assss);
  }
  return ass;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

//행렬의 덧셈
