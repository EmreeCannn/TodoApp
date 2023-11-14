// Korona günlerinde evde miyoksa ofiste mi çalışılmalı anketi projesi 

const CorrectAnswer=["E","E","E","E"];

const form=document.querySelector(".question-form");



const result=document.querySelector(".result");

form.addEventListener("submit",e=>{
    e.preventDefault();
    // form submit oldugunda yenilenmesini engellemek için 
    let score=0;
    const get_answer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    console.log(get_answer);
    // input değerlerini name içindeki değer.value ile aldım 
    
    get_answer.forEach((answer,index)=>{
        // console.log(answer,index);
        if(answer===CorrectAnswer[index]){
            score+=25;
        } 
    })
    result.classList.remove("d-none");
    let puan=0;
    const bastir=setInterval(() => {
        
        result.querySelector("span").textContent=`${puan} %`;
        if(score===puan){
            clearInterval(bastir);
            // puan scoro eşit olduğunda durdur 
        }
        else{
            puan+=1;
        }
    },12);
    // 12 milisaniyede bir puanı bir arttır ve ekrana bas 

    // result.querySelector("span").textContent=`${puan} %`;
    // result.children[0].children[0].textContent=`${score} %`;

    
});

// animasyonlu bastırmak için setinterval methodu kullanılır

// setTimeOut ile Setinterval methodu arasındaki fark nedir 

// setTimeout(()=>{
//     console.log("can");
// },2000)
// süslü parantez bittikten sonra virgül koyup kaç saniye sonra yapmak istediğimi yazıyorum

// setInterval(() => {
//     console.log("emre");
// }, 1000);
// her bir saniyede bir içerisindeki kod durmadan çalışır  setTimeout da sadece bir kez çalışır ve durur
// Set intervalde çalışmaya devam eder 
// let i=0;
// const publish=setInterval(() => {
//     console.log("published");
//     i++

//     if(i===4){

//         clearInterval(publish);
//         // içerisine hangi intervali durduracağımı yazıyorum 
//     }
// },1000);

//  bunu durdurmak için  clearInterval kullanmam gerek  öncelikle bunu kullanmak için setIntervali bir değişkene atmam gerekir




