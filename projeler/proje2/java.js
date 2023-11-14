const CorrectAnswer=["8","10","3","25"];

const form=document.querySelector(".question-form");
console.log(form);
const result=document.querySelector(".result");
const new_value=document.querySelector(".dogru_cevap");

const buton=document.querySelector(".buton");



form.addEventListener("submit",e=>{
    e.preventDefault();
    result.classList.remove("d-none");
    const get_answers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    // console.log(get_answers);
    // burdan bana string değer döndü o yüzden correct answerları string yaptım 
    score=0;
    
    get_answers.forEach((answer,index)=>{
        if(answer===CorrectAnswer[index]){
            score+=25;
        }
    
    });
    setTimeout(() => {
        if(score===100){
            new_value.classList.remove("d-none");
            buton.setAttribute("disabled","");
            // butonun tıklanma özelliğini kaldırdım setAttribute ile
        }
    }, 1000);
    let puan=0;
    const bastir=setInterval(() => {
        result.querySelector("#percentage").textContent=`${puan} %`
        if(score===puan){
            clearInterval(bastir);
        }
        else{
            puan+=1;
        }
    },22);
});