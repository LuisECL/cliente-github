import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BemVindo from "./components/BemVindo";
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <BemVindo meuNome="Luis"></BemVindo>
      <BemVindo meuNome="Enrique"/>
      <BemVindo></BemVindo>
    </div>
  );
}

export default App;
