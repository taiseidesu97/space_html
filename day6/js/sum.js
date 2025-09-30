
//1~5까지 출력하기

const result = document.getElementById("result");

for(let i=1; i <=5; i++){
    console.log(i);
    //+= i; , += i + " " , +=`${i}`;
    // result.innerHTML = result.innerHTML + " "
    result.innerHTML +=`${i}`;
}

//1~5 까지의 합계
let sum = 0; //합계 저장변수
// sum = sum +1; //1
// sum = sum +2; //3
// sum = sum + 3; //6
for(let i = 1; i <= 5; i++){
    sum = sum + i; //sum = sum +1;
    console.log(`i=${i}, sum=${sum}`);
    
}
result.innerHTML = `합계: ${sum}`; //15