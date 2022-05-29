import {useEffect, useState} from 'react';

import apiGithub from '../services/apiGithub';
import { useParams } from 'react-router-dom';

function Perfil() {
  const [perfil, setPerfil] = useState({})
  const {usuario = 'LuisECL'} = useParams();

  useEffect(() => {
    apiGithub.get(`/users/${usuario}`)
    .then(resposta => {
      setPerfil(resposta.data);
    })
  }, [usuario])

  useEffect(()=>{
    console.log(perfil)
  }, [perfil])

  return (
    <main>
      {/* {showLoading &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      } */}
          <>
            <h1>Meu perfil</h1>
            <h2>{perfil.name}</h2>

            <div className="card w-50 mx-auto align-items-center">
              <img src={perfil.avatar_url} alt={`Foto de perfil de ${perfil.name}`} className="card-img-top" style={{ maxWidth: "200px" }} />
              <div className="align-items-start">
                <p><strong>Descrição</strong></p>
                <small>{perfil.bio} </small>
                <p>Usuário: <a href={perfil.html_url} target="_blank" rel="noreferrer noopener">{perfil.login}</a></p>

                <p className="cart-text"><i className="me-2 bi bi-twitter"></i><a href={`https://twitter.com/${perfil.twitter_username}`} target="_blank" rel="noopener noreferrer">{perfil.twitter_username}</a></p>
                <p className="cart-text"><i className="me-2 bi bi-geo-fill"></i>{perfil.location}</p>
                <p className="cart-text"><i className="me-2 bi bi-globe2"></i><a href='blog' target="_blank" rel="noopener noreferrer">blog</a></p>
                <p className="cart-text"><i className="me-2 bi bi-building"></i>empresa</p>
                <p className="card-text"><strong>Tem autenticação de dois passos?</strong> {perfil.two_factor_authentication ? 'Sim' : 'Não'}</p>
                <p className="card-text"><strong>É administrador do GitHub?</strong> {perfil.site_admin? 'Sim' : 'Não'}</p>

                <p className="card-text"><strong>Repos públicos:</strong> {perfil.public_repos}</p>
                <p className="card-text"><strong>Repos privados:</strong> {perfil.total_private_repos}</p>
                <p className="card-text"><strong>Disponível para contratação?</strong> {perfil.hireable ? 'Sim' : 'Não'}</p>
              </div>
            </div>
          </>
    </main>
  );
}

export default Perfil;