export function Contato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! (Simulação em React)');
  };

  return (
    <section id="contato" className="contato-section">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="contato-desc">Tem algum projeto em mente ou quer apenas bater um papo? Me mande uma mensagem!</p>
      
      <form className="form-contato" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="5" placeholder="Como posso ajudar?" required></textarea>
        </div>
        <button type="submit" className="btn-enviar">Enviar Mensagem</button>
      </form>
    </section>
  );
}