const registros = JSON.parse(localStorage.getItem('registros')) || [];

function registrarPonto() {
  const nome = document.getElementById('nome').value.trim();
  const tipo = document.getElementById('tipo').value;
  if (!nome) {
    alert('Por favor, digite seu nome.');
    return;
  }

  const agora = new Date();
  const data = agora.toLocaleDateString('pt-BR');
  const hora = agora.toLocaleTimeString('pt-BR');

  registros.push({ nome, tipo, data, hora });
  localStorage.setItem('registros', JSON.stringify(registros)); // salva no navegador
  atualizarTabela();
  document.getElementById('nome').value = '';
}

function atualizarTabela() {
  const tbody = document.querySelector('#tabela tbody');
  tbody.innerHTML = '';
  registros.forEach(r => {
    const linha = `<tr>
      <td>${r.nome}</td>
      <td>${r.tipo}</td>
      <td>${r.data}</td>
      <td>${r.hora}</td>
    </tr>`;
    tbody.innerHTML += linha;
  });
  function acessarAdmin() {
  window.location.href = 'login.html';
}
}

// Carrega os dados ao abrir a página
atualizarTabela();
