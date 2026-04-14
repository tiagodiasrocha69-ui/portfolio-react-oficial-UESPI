import { SobreMim } from './components/SobreMim';
import { Projetos } from './components/Projetos';
import { Contato } from './components/Contato';
import './App.css'; 

function App() {
  return (
    <>
      <header>
        <nav>
          <ul className="menu-flex">
            <li><a href="#sobre-mim">Sobre Mim</a></li>
            <li><a href="#meus-projetos">Portfólio</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <SobreMim />
        <Projetos />
        <Contato />
      </main>

      <footer>
        <p>&copy; 2026 Tiago Dias Rocha. Desenvolvido em React para a disciplina de Programação Web.</p>
      </footer>
    </>
  );
}

export default App;