import type { Produto } from "../types/Produto";

type Props = {
  produtos: Produto[];
};

function Dashboard({ produtos }: Props) {

  const total = produtos.length;
  const vendidos = produtos.filter(p => p.status === "vendido").length;
  const disponiveis = produtos.filter(p => p.status === "disponivel").length;

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Dashboard</h2>

      <div className="row">

        {/* COLUNA ESQUERDA */}
        <div className="col-md-3 d-flex flex-column gap-3">

          <div className="card p-3 text-center shadow">
            <h5>Total</h5>
            <h3>{total}</h3>
          </div>

          <div className="card p-3 text-center shadow">
            <h5>Disponíveis</h5>
            <h3>{disponiveis}</h3>
          </div>

          <div className="card p-3 text-center shadow">
            <h5>Vendidos</h5>
            <h3>{vendidos}</h3>
          </div>

        </div>

        {/* LADO DIREITO */}
        <div className="col-md-9">

          <div className="card shadow border-0">

            <img
              src="/lebron.jpg"
              alt="LeBron James"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;