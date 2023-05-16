const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];
const btnSubmit = document.querySelector('#btnSubmit');

function createCard(taskInfo) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  // Adiciona Classe no span para definir qual tipo é 
  if (taskInfo.tipo == "Urgente") {
    span.classList.add("span-urgent");
  } else if (taskInfo.tipo == "Prioritário") {
    span.classList.add("span-priority");
  } else {
    span.classList.add("span-normal");
  }

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  button.addEventListener('click', function () {
    // Procurando o índice do objeto no array de tasks
    const taskIndex = tasks.findIndex(item => item.titulo === taskInfo.titulo);
    if (taskIndex !== -1) {
      // Removendo o objeto do array de tasks
      tasks.splice(taskIndex, 1);
      // Atualizando a lista de tarefas exibidas na tela
      renderElements(tasks);
    }
  });

  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  return li;
};

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  for (let i = 0; i < taskList.length; i++) {
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  };
};

btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  let title = document.querySelector("#input_title");
  let priority = document.querySelector("#input_priority");

  if (title.value === "") {
    alert("O Título não pode estar vazio");
  } else {
    tasks.push({
      titulo: title.value,
      tipo: priority.value,
    });
  }

  title.value = "";
  priority.value = "Urgente";
  renderElements(tasks);
});

renderElements(tasks);
