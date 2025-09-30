//watch.js

const display = document.getElementById("display");

//1초 간격으로 mywatch()호출

//window 객체가 생략됨 -window.setIntervar()
// window.setInterval(myWatch,1000);

// function myWatch(){
//     const date= new Date(); //날짜 객체 생성
//     let time = date.toLocaleTimeString();
//     display.textContent = time;
// }
setInterval(() => {
    const date= new Date(); //날짜 객체 생성
    let time = date.toLocaleTimeString(); //시간 포맷으로 변환
    display.textContent = time;
},1000)