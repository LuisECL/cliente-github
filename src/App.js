// const logo = require('./logo.svg');
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from './components/NavBar'
import Perfil from './Pages/Perfil';

function App() {
  const caminhos = [
    {
      id: 1,
      caminho: '/',
      titulo: 'Página inicial'
    },
    {
      id: 2,
      caminho: '/perfil',
      titulo: 'Perfil'
    },
    {
      id: 3,
      caminho: '/repositorios',
      titulo: 'Repositórios'
    },
    {
      id: 4,
      caminho: '/busca',
      titulo: 'Busca'
    }
  ]

  return (
    <div >
      <NavBar menu={caminhos}  />
      <Perfil />
    </div>
  );
}

export default App;
//module.exports = App;