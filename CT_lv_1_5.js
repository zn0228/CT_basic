function solution(x) {
  let num = x.toString();
  let a = 0;
  let n = num.length - 1;
  for (let i = 0; i < num.length; i++) {
    if (n > 0) {
      console.log(x / 10 ** n);
      a = Math.floor(x / 10 ** n) + a;
      n--;
    } else a = (x % 10) + a;
  }

  console.log(a);

  let answer = true;

  if (x % a !== 0) {
    answer = false;
  }

  return answer;
}

solution(1224);
