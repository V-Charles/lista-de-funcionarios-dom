const funcionarios = [
    { nome: "Vinicius", cargo: "Desenvolvedor Full-Stack", salario: 6500 },
    { nome: "Marina", cargo: "Especialista em Cordas", salario: 4200 },
    { nome: "Beto", cargo: "Luthier", salario: 5800 },
    { nome: "Camila", cargo: "Gerente de Logística", salario: 7100 },
    { nome: "Diego", cargo: "Atendimento ao Cliente", salario: 3100 }
  ];
  
  const listaNoHTML = document.getElementById('lista-funcionarios');
  
  funcionarios.forEach(funcionario => {
    const itemDaLista = document.createElement('li');

    itemDaLista.textContent = `${funcionario.nome} trabalha como ${funcionario.cargo} e ganha R$${funcionario.salario}`;
    
    listaNoHTML.appendChild(itemDaLista);
  });
