type Props = {
  setPagina: (pagina: string) => void;
};

function Navbar({ setPagina }: Props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">

        <span className="navbar-brand fw-bold">
          LBJ Store
        </span>

        <div className="d-flex gap-2">

          <button
            className="btn btn-outline-light"
            onClick={() => setPagina("dashboard")}
          >
            Dashboard
          </button>

          <button
            className="btn btn-outline-warning"
            onClick={() => setPagina("produtos")}
          >
            Produtos
          </button>

          <button
            className="btn btn-outline-light"
            onClick={() => setPagina("sobre")}
          >
            Sobre
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;