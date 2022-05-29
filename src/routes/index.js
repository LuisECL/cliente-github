import { Routes, Route } from "react-router-dom";


import Error404 from "../Pages/Errors/Error404";
import Perfil from "../Pages/Perfil";
import PesquisaUsuario from "../Pages/PesquisaUsuario"

function Roteador() {
  return (
    <>
        <Routes>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil/:usuario" element={<Perfil />} />
          <Route path="/busca" element={<PesquisaUsuario />} />



          <Route path='*' element={<Error404/>} />
        </Routes>
    </>
  );
}

export default Roteador;
