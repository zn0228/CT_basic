function solution(phone_number) {
  const str = [...phone_number];

  const answer = str.map((str, index) => {
    if (index < phone_number.length - 4) {
      return "*";
    }
    return str;
  });

  const ans = answer.join("");
  return ans;
}

//핸드폰 번호 가리기
//다음에 함수 사용하지 않고 풀기
