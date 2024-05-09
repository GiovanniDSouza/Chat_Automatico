//Abre a tela do nosso chat e já da o focu para parte de digitar o texto
function help(){
    document.querySelector(".botaoStart").style.display = "none";
    document.querySelector(".tela").style.visibility = "visible";
    lista.scrollTop = lista.scrollHeight;

  }
  
  document.getElementById("botaoStartId").addEventListener('click', function() {
    document.getElementById("nome").focus(); // Direciona o foco para o campo de texto quando o botão é clicado
  });

  //Fecha a tela do chat 
  function clos(){
     document.querySelector(".tela").style.visibility = "hidden";
     document.querySelector(".botaoStart").style.display = "block";

  }

  //Nome das variaveis 
  const nome = document.querySelector("#nome");
  const lista = document.querySelector(".lista");
  const botaoEnvio = document.querySelector(".botaoEnvio");
  const button = document.querySelector("button")

  //Button de envio de msg
  button.addEventListener("click", function(){
      const inputName = nome.value;
      const inputNamee = nome.value.toLowerCase();
      nome.value='';

    // Verifica se o campo de texto está vazio, não permite o envio de msg vazia
if (inputName === "") {

  return; // Encerra a execução da função para que a mensagem de erro não seja removida abaixo
}

// Aqui você pode continuar com o restante do código para processar a entrada do usuário

      const palavrasChave = ["oi", "olá", "ola", "bom dia", "boa tarde", "boa noite"];

          if(palavrasChave.includes(inputNamee) ){
              const templateHTMLL = `<p id="msg">${inputNamee.charAt(0).toUpperCase() + inputNamee.slice(1)}</p> <p id="ok">${inputNamee.charAt(0).toUpperCase() + inputNamee.slice(1)}, tudo bem? No que posso ajudar?</p>`;

              lista.innerHTML += templateHTMLL;

          } else if(inputNamee === "quero saber o que tem?") { // Convertendo a entrada para minúsculas

              const templateHTMLL = `<p id="msg">${inputNamee.charAt(0).toUpperCase() + inputNamee.slice(1)}</p><p id="ok">Muito bem, temos estas opcoes</p>`;

              lista.innerHTML += templateHTMLL;

          }else{
              const templateHTML = `<p id="msg">${inputName}</p> <p id="ok" >Desculpa não consegui entender</p>`;
      lista.innerHTML += templateHTML;
          }
          lista.scrollTop = lista.scrollHeight;
  })
  document.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita o comportamento padrão do Enter (quebra de linha no textarea)
        // Aqui você pode continuar com o restante do código para enviar a mensagem
        document.getElementById("btFechar").click();
    }
});



