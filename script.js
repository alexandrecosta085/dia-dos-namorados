// Seleciona o botão que controla a música e o elemento de áudio
const btnMusic = document.getElementById("play-music");
const music = document.getElementById("bg-music");

// Evento de clique para tocar ou pausar a música
btnMusic.addEventListener("click", () => {
  if (music.paused) {
    music.play(); // Se a música estiver pausada, toca a música
    btnMusic.textContent = "Pausar Música"; // Atualiza texto do botão
  } else {
    music.pause(); // Se a música estiver tocando, pausa a música
    btnMusic.textContent = "Tocar Música"; // Atualiza texto do botão
  }
});

// Função para mostrar/ocultar a mensagem final no site
function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.classList.toggle("hidden-message"); // Alterna a classe que esconde/mostra a mensagem
}

// Função para mostrar/ocultar as seções da história, momentos e mensagem final
function mostrarStory() {
  const story = document.getElementById("story");
  const moments = document.getElementById("moments");
  const finalMessage = document.getElementById("final-message");

  // Alterna a visibilidade das seções para que elas apareçam ou desapareçam juntas
  story.classList.toggle("hidden-story");
  moments.classList.toggle("hidden-story");
  finalMessage.classList.toggle("hidden-story");
}

// Adiciona evento de clique para o botão que mostra a mensagem final
document
  .getElementById("btn-message")
  .addEventListener("click", mostrarMensagem);

// Adiciona evento de clique para o botão que alterna a visualização da história
document.getElementById("btn-story").addEventListener("click", mostrarStory);

// Define a data do início do relacionamento para o contador (exemplo: 21 de setembro de 2024 à meia-noite)
const dataInicio = new Date("2024-09-21T00:00:00");

// Função para atualizar o timer que mostra o tempo juntos
function atualizarTimer() {
  const agora = new Date(); // Data e hora atuais
  const diffMs = agora - dataInicio; // Diferença em milissegundos

  // Calcula o total de dias, horas, minutos e segundos da diferença
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diffMs / (1000 * 60)) % 60);
  const segundos = Math.floor((diffMs / 1000) % 60);

  // Atualiza o conteúdo do elemento HTML que exibe o timer
  const elementTimer = document.getElementById("timer");
  elementTimer.textContent = `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

// Atualiza o timer a cada segundo (1000ms)
setInterval(atualizarTimer, 1000);

// Chama a função imediatamente para mostrar o tempo assim que a página carrega
atualizarTimer();
