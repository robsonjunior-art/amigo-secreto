let nomes = []; 

function adicionarAmigo() {
  let nomeInput = document.getElementById("amigo");
  let nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  nomes.push(nome);

  atualizarLista();

  nomeInput.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  let item = document.createElement("li");
  item.textContent = nomes[nomes.length - 1]; 
  lista.appendChild(item);
}

function sortearAmigo() {
  if (nomes.length === 0) {
    alert("A lista está vazia. Adicione pelo menos um nome.");
    return;
  }

  let indice = Math.floor(Math.random() * nomes.length);
  let sorteado = nomes[indice];

  document.getElementById("resultado").innerText = "Amigo sorteado: " + sorteado;
}