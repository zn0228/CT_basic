function solution(phone_number) {
    const str = [];
    str = (...phone_number);
    
    for (let i = 0; i < str.length - 4; i++){
        str[i] = "*";
    }
    
    var answer = str.join('');
    return answer;
}

//핸드폰 번호 가리기