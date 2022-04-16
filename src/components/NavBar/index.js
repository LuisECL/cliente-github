import 'bootstrap/js/dist/collapse';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="" className="navbar-brand">
          <i className="bi bi-github d-inline-block"></i>
          <span className="ms-3 d-inline-block">GitHub Alternativo</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="" className="nav-link">Página inicial</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Perfil pessoal</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Repositórios</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">Busca</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;