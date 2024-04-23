let question = document.getElementById('question')
let FrontButton = document.getElementById('FrontButton')
let BackButton = document.getElementById('BackendButton')
function ChangeQuestion(){
question.textContent = 'Você deseja aprender'
};
function Frontend(){
 FrontButton.textContent = 'React'
 FrontButton.addEventListener('click',FrontEndWay);
 BackButton.textContent = 'Vue'
 BackButton.addEventListener('click', FrontEndWay);
   
 
 ChangeQuestion()
};
function FrontEndWay(){
    question.textContent = 'Você deseja'
    FrontButton.textContent = 'seguir se especializando'
    FrontButton.addEventListener('click', End);
    BackButton.textContent ='se tornar Fullstack'
    BackButton.addEventListener('click', End1);
};
function BackendWay(){
    question.textContent = 'Você deseja'
    FrontButton.textContent = 'seguir se especializando'
    FrontButton.addEventListener('click', End);
    BackButton.textContent ='se tornar Fullstack'
    BackButton.addEventListener('click', End2);
}
function End(){
 alert('Que bom! Continue seus Estudos.')
 Nextlanguages()
};
function End1(){
    alert('Ótimo,agora que começe o estudo de Backend!')
    location.reload()
}
function End2(){
    alert('Ótimo,agora que começe o estudo de FrontEnd!')
    location.reload()
}
function Nextlanguages(){
let language = prompt('Têm mais alguma linguagem que você deseja aprender?                    Por favor responda sim ou não')
if(language === "sim"){
   let languages = prompt('Qual linguagem você deseja aprender?')
   alert(`Ótimos estudos em  ${languages}`)
   location.reload()
}else{
location.reload()
}
}
function Backend(){
    FrontButton.textContent = 'C#';
    FrontButton.addEventListener('click', BackendWay);
    BackButton.textContent = 'Java';
    BackButton.addEventListener('click', BackendWay);
    ChangeQuestion()
};