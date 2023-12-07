import logo from './logo.svg';
import Pai from './componentes/pai';
import Cadastro from './componentes/cadastro';
import MostrarContato from './componentes/cardContato';
import Consulta from './componentes/consulta';

function App() {
    return (
    <div className="App">
      {/*<Pai/>*/}  {/*chamamos o componente pai */}
      <Cadastro />
      <Consulta />
      
    </div>
  );
}

export default App;
