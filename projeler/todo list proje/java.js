// todo list  proje 


//  listeye eleman ekleyelim 

const form=document.querySelector(".form");
const ul=document.querySelector(".ul_list");
const input=document.querySelector(".add");
const li_element=document.querySelectorAll(".li");
const i_element=document.querySelectorAll(".fa-solid");
const search=document.querySelector(".search");

const header_form=document.querySelector(".header_search");

// listeye eleman ekleme 

// trim sayesinde boşluklardan kurtuluruz 
// trimStart() baştaki boşlukları siler
form.addEventListener("submit",e=>{ 
    const li=document.createElement("li");
    const i=document.createElement("i");
   
    // direkt entere tıkladığımda içine değer girdiğimde boş eklemsini önlemek için 
    if(input.value.trim()==""){
        alert("boş değer eklenemez");
    }else{
        i.classList.add("fa-solid");
        i.classList.add("fa-trash-can");
        i.classList.add("delete");
        li.classList.add("li");
        li.textContent=input.value.trim(); 
        li.append(i);
        ul.append(li);
        e.preventDefault();
        // input.value="";
        //  bunu da kullanabilirim ikisi de olur 
        form.reset();
        // yazdıktan sonra input valuede yazdığım değer kalmasın diye bunun içini boşalttım 
        

    }
});

//  yapılan taskin üstünü çizmek için 
ul.addEventListener("click",e=>{
    if(e.target.className=="li"){
        e.target.classList.add("line-thorug");
    }
});

// listeden tıkladığım etiketi silme işlemi 

ul.addEventListener("click",e=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        // tıkladığım i etiketinin parentini yani li etiketini kaldırır
    }
})

// liste elemanları içinde arama yapma 

const filterTodos=value=>{
    // array from ile html collection u nodelist e çevirdim  sonra her bir li etiketime todo dedim
    Array.from(ul.children).filter(todo=>!todo.textContent.toLocaleLowerCase().includes(value)).forEach(todo=>todo.classList.add("none"));
        
        // return !todo.textContent.includes(value).forEach(todo=>{
        //     // her bir li etiketim için todo ismini verdim 
        //     // forEach içindeki todo değeri sayesinde filtrelediğim li etiketimi attım 
        //     todo.classList.add("none");
        // })
        // eğer benim li elementimin içindeki text value değerimi içermiyosa 

    Array.from(ul.children).filter(todo=>todo.textContent.toLocaleLowerCase().includes(value)).forEach(todo=>todo.classList.add("choosen_one"));
}

search.addEventListener("keyup",()=>{
    const value=search.value.trim().toLocaleLowerCase();
    filterTodos(value);

});


