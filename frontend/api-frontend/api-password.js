    let btn = document.querySelector('#olhar')
    let inputSenha = document.querySelector('#senha')

btn.addEventListener('click',()=>{    
    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type','text')
    }
    else{
        inputSenha.setAttribute('type','password')
    }
})

function entrar(){
    window.open("./Dashboard/dashboard.html", "_blank")
}