export function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Gestor Financeiro Pessoal",
      descricao: "Aplicativo web desenvolvido para controle de receitas, despesas e saldo em tempo real.",
      link: "#" 
    },
    {
      id: 2,
      titulo: "Landing Page Corporativa",
      descricao: "Página de conversão totalmente responsiva, aplicando conceitos de Mobile First.",
      link: "#"
    },
    {
      id: 3,
      titulo: "Aplicação de Gestão de Tarefas",
      descricao: "Ferramenta interativa com manipulação de DOM para criação e exclusão de itens.",
      link: "#"
    }
  ];

  return (
    <section id="meus-projetos">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="grid-container">
        {projetos.map((projeto) => (
          <div className="card-projeto" key={projeto.id}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">Visualizar Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}