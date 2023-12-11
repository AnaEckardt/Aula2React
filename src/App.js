import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
    <div className="App">
      {/*<Pai/>*/}  {/*chamamos o componente pai */}
      <h1>Agenda</h1>
      <hr/>
      <nav>
        <Link to="/contatos/cadastrar">Cadastro</Link> &nbsp;
        <Link to="/contatos/consultar">Consulta</Link> &nbsp;
      </nav>
      <main>
        <Outlet />
      </main>
      
    </div>
  );
}

export default App;
