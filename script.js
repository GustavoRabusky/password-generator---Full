// Cabeçalho onde pegamos os valores pelo ID com (#nomeID);

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let novaSenha = "";

// Função onde pegamos o valor do slider e passamos para o span;

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

//Função gera a senha;
function generatePassword() {
  let pass = "";

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

//Função para copiar senha;
function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}
