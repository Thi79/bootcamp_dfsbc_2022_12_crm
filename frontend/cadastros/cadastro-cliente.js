let labelName = document.querySelector('#labelName');
let inputName = document.querySelector('#inputName');

let labelLastName = document.querySelector('#labelLastName');
let inputLastName = document.querySelector('#inputLastName');

let labelCpf = document.querySelector('#labelCpf');
let cpf = document.querySelector('#cpf');

let labelRg = document.querySelector('#labelRg');
let inputRg = document.querySelector('#inputRg');

let labelTelefone = document.querySelector('#labelTelefone');
let telefone = document.querySelector('#telefone');

let labelEmail = document.querySelector('#labelEmail');
let inputEmail = document.querySelector('#inputEmail');

let labelCep = document.querySelector('#labelCep');
let inputCep = document.querySelector('#cep');

let labelAdress = document.querySelector('#labelAdress');
let logradouro = document.querySelector('#logradouro');

let labelNumber = document.querySelector('#labelNumber');
let inputNumber = document.querySelector('#inputNumber');

let labelCity = document.querySelector('#labelCity');
let localidade = document.querySelector('#localidade');

let labelState = document.querySelector('#labelState');
let uf = document.querySelector('#uf');

inputName.addEventListener('keyup', () => {
  if (inputName.value.length <= 2) {
    labelName.setAttribute('style', 'color: #8B0000');
    labelName.innerHTML = 'Nome *Deve conter no mínimo 2 caracteres';
    inputName.setAttribute('style', 'border-color: #8B0000');
  } else {
    labelName.setAttribute('style', 'color: #20B2AA');
    labelName.innerHTML = 'Nome';
    inputName.setAttribute('style', 'border-color: #20B2AA');
  }
});

inputLastName.addEventListener('keyup', () => {
  if (inputLastName.value.length <= 2) {
    labelLastName.setAttribute('style', 'color: #8B0000');
    labelLastName.innerHTML = 'Sobrenome *Deve conter no mínimo 2 caracteres';
    inputLastName.setAttribute('style', 'border-color: #8B0000');
  } else {
    labelLastName.setAttribute('style', 'color: #20B2AA');
    labelLastName.innerHTML = 'Sobrenome';
    inputLastName.setAttribute('style', 'border-color: #20B2AA');
  }
});
function validateRg(rg) {
    var rgWithoutSpaces = rg.replace(/\s/g, '');    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1*$/.test(rgWithoutSpaces)) {
      return false;
    }    
    return rgWithoutSpaces.length >= 7;
  }    
  inputRg.addEventListener('keyup', () => {
    const rgValue = inputRg.value;
    const labelRg = document.querySelector('#labelRg');  
    if (!validateRg(rgValue)) {
      labelRg.style.color = '#8B0000';
      labelRg.textContent = '*RG inválido';
      inputRg.style.borderColor = '#8B0000';
    } else {
      labelRg.style.color = '#20B2AA';
      labelRg.textContent = 'RG';
      inputRg.style.borderColor = '#20B2AA';
    }
  });
  
telefone.addEventListener('keyup', () => {
    if (telefone.value.length <= 14) {
    labelTelefone.setAttribute('style', 'color: #8B0000');
    labelTelefone.innerHTML = '*Telefone inválido';
    telefone.setAttribute('style', 'border-color: #8B0000');
  } else {
    labelTelefone.setAttribute('style', 'color: #20B2AA');
    labelTelefone.innerHTML = 'Telefone';
    telefone.setAttribute('style', 'border-color: #20B2AA');
  }
});

function validateEmail(email) {
    // Expressão regular para validar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
  }

  inputEmail.addEventListener('keyup', () => {
    if (!validateEmail(inputEmail.value)) {
      labelEmail.setAttribute('style', 'color: #8B0000');
      labelEmail.innerHTML = '*E-mail inválido';
      inputEmail.setAttribute('style', 'border-color: #8B0000');
    } else {
      labelEmail.setAttribute('style', 'color: #20B2AA');
      labelEmail.innerHTML = 'E-mail';
      inputEmail.setAttribute('style', 'border-color: #20B2AA');
    }
  });
  
// Função para validar CEP utilizando a API do ViaCEP
function validateCep(cep) {
    var cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
    return cepRegex.test(cep);
  }
  
  inputCep.addEventListener('keyup', () => {
    var cepValue = inputCep.value;
  
    if (!validateCep(cepValue)) {
      labelCep.setAttribute('style', 'color: #8B0000');
      labelCep.innerHTML = '*CEP inválido';
      inputCep.setAttribute('style', 'border-color: #8B0000');
      return;
    }
  
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          labelCep.setAttribute('style', 'color: #8B0000');
          labelCep.innerHTML = '*CEP não encontrado';
          inputCep.setAttribute('style', 'border-color: #8B0000');
        } else {
          labelCep.setAttribute('style', 'color: #20B2AA');
          labelCep.innerHTML = 'CEP';
          inputCep.setAttribute('style', 'border-color: #20B2AA');
  
          // Preencher os campos de endereço com os dados retornados pela API
          logradouro.value = data.logradouro;
          localidade.value = data.localidade;
          uf.value = data.uf;
        }
      })
      .catch(error => {
        console.error('Erro ao consultar o CEP:', error);
      });
  });
  
logradouro.addEventListener('keyup', () => {
  if (logradouro.value.length <= 4) {
    labelAdress.setAttribute('style', 'color: #8B0000');
    labelAdress.innerHTML = 'Endereço *Insira no mínimo 6 caracteres';
    logradouro.setAttribute('style', 'border-color: #8B0000');
  } else {
    labelAdress.setAttribute('style', 'color: #20B2AA');
    labelAdress.innerHTML = 'Endereço';
    logradouro.setAttribute('style', 'border-color: #20B2AA');
  }
});

inputNumber.addEventListener('keyup', () => {
    if (inputNumber.value.length <= 1) {
    labelNumber.setAttribute('style', 'color: #8B0000');
    labelNumber.innerHTML = 'Número *Número inválido';
    inputNumber.setAttribute('style', 'border-color: #8B0000');
  } else {
    labelNumber.setAttribute('style', 'color: #20B2AA');
    labelNumber.innerHTML = 'Número';
    inputNumber.setAttribute('style', 'border-color: #20B2AA');
  }
});

localidade.addEventListener('keyup', () => {
  if (localidade.value.length <= 4) {
    labelCity.setAttribute('style', 'color: #8B0000');
    labelCity.innerHTML = 'Cidade *Insira no mínimo 6 caracteres';
    localidade.setAttribute('style', 'border-color: #8B0000');
  } else {
    labelCity.setAttribute('style', 'color: #20B2AA');
    labelCity.innerHTML = 'Cidade';
    localidade.setAttribute('style', 'border-color: #20B2AA');
  }
});

uf.addEventListener('keyup', () => {
  if (uf.value.length <= 1) {
    labelState.setAttribute('style', 'color: #8B0000');
    labelState.innerHTML = 'Estado *Insira a sigla do estado';
    uf.setAttribute('style', 'border-color: #8B0000');
  } else {
    labelState.setAttribute('style', 'color: #20B2AA');
    labelState.innerHTML = 'Estado';
    uf.setAttribute('style', 'border-color: #20B2AA');
  }
});

function validateCpf(cpf) {
    // Remover caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');
    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
    // Verificar se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }  
    // Calcular o primeiro dígito verificador
    var sum = 0;
    for (var i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var digit1 = 11 - (sum % 11);
    if (digit1 > 9) {
      digit1 = 0;
    }  
    // Calcular o segundo dígito verificador
    sum = 0;
    for (var j = 0; j < 10; j++) {
      sum += parseInt(cpf.charAt(j)) * (11 - j);
    }
    var digit2 = 11 - (sum % 11);
    if (digit2 > 9) {
      digit2 = 0;
    }
    // Verificar se os dígitos calculados são iguais aos dígitos informados no CPF
    if (parseInt(cpf.charAt(9)) !== digit1 || parseInt(cpf.charAt(10)) !== digit2) {
      return false;
    }  
    return true;
  }
  cpf.addEventListener('keyup', () => {
    var cpfValue = cpf.value;
  
    if (!validateCpf(cpfValue)) {
      labelCpf.setAttribute('style', 'color: #8B0000');
      labelCpf.innerHTML = '*CPF inválido';
      cpf.setAttribute('style', 'border-color: #8B0000');
    } else {
      labelCpf.setAttribute('style', 'color: #20B2AA');
      labelCpf.innerHTML = 'CPF';
      cpf.setAttribute('style', 'border-color: #20B2AA');
    }
  });
    

function cadastrar() {
  var nome = inputName.value;
  var sobrenome = inputLastName.value;
  var cpfValue = cpf.value;
  var rg = inputRg.value;
  var telefoneValue = telefone.value;
  var email = inputEmail.value;
  var cepValue = inputCep.value;
  var endereco = logradouro.value;
  var numero = inputNumber.value;
  var cidade = localidade.value;
  var estado = uf.value;

  console.log(
    "Nome:",nome,
    "Sobrenome", sobrenome,
    "CPF",cpfValue,
    "RG",rg,
    "Telefone",telefoneValue,
    "Email",email,
    "CEP",cepValue,
    "Rua",endereco,
    "Nº",numero,
    "Cidade",cidade,
    "Estado",estado   
  );
  var dadosCliente = {
    nome: nome,
    sobrenome: sobrenome,
    cpf: cpfValue,
    rg: rg,
    telefone: telefoneValue,
    email: email,
    cep: cepValue,
    endereco: endereco,
    numero: numero,
    cidade: cidade,
    estado: estado
  };

  fetch('http://localhost:8080/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosCliente)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta do servidor:', data);
    })
    .catch(error => {
      console.error('Erro ao enviar os dados:', error);
    });
}
    

