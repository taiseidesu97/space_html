//return_func.js
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const total = document.querySelector("#total");
//제곱수 계산 함수
const square = (x) =>{ //매개 변수 1개인 경우
    return x * x;
}

//절대값 계산 함수
const myAbs = (x) => {
    if(x<0)
        return -x;
    else
        return x;
}

//두 수의 합(익명 함수)
const add = (x, y) =>{
    return x + y;
}

//add()함수 호출
const showAdd =(a, b) =>{
    total.textContent = `덧셈 결과: ${add(a, b)}`;
}

let val = myAbs(-3);
result2.textContent = `절대값: ${val}`;
//함수 호출
let num = square(8);
result1.textContent = `제곱값: ${num}`;