import { useState } from "react";
import type { Produto } from "../types/Produto";

type Props = {
  produtos: Produto[];
  venderProduto: (id: number) => void;
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: number) => void;
};

function Produtos({ produtos, venderProduto, adicionarProduto, removerProduto }: Props) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [filtro, setFiltro] = useState("todos");

  const handleSubmit = () => {
    if (!nome || !preco) return;

    const novoProduto: Produto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      status: "disponivel",
      imagem: imagem || "/camisa.png"
    };

    adicionarProduto(novoProduto);

    setNome("");
    setPreco("");
    setImagem("");
  };

  const produtosFiltrados = produtos.filter((p) => {
    if (filtro === "vendidos") return p.status === "vendido";
    if (filtro === "disponiveis") return p.status === "disponivel";
    return true;
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Produtos</h2>

      <div className="card p-3 mb-4 shadow">
        <h5>Adicionar Produto</h5>

        <input
          className="form-control mb-2"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Imagem (/camisa.png)"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <button className="btn btn-primary mt-2" onClick={handleSubmit}>
          Adicionar
        </button>
      </div>

      <div className="mb-4">
        <button className="btn btn-secondary me-2" onClick={() => setFiltro("todos")}>
          Todos
        </button>
        <button className="btn btn-success me-2" onClick={() => setFiltro("disponiveis")}>
          Disponíveis
        </button>
        <button className="btn btn-danger" onClick={() => setFiltro("vendidos")}>
          Vendidos
        </button>
      </div>

      <div className="row">
        {produtosFiltrados.map((p) => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card h-100 shadow border-0 card-hover">

              <img
                src={p.imagem}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px"
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title">{p.nome}</h5>

                <p className="card-text">R$ {p.preco}</p>
                <span
                  className={
                    p.status === "vendido"
                      ? "badge bg-danger mb-2"
                      : "badge bg-success mb-2"
                  }
                >
                  {p.status}
                </span>

                <button
                  className="btn btn-dark mt-auto"
                  onClick={() => venderProduto(p.id)}
                  disabled={p.status === "vendido"}
                >
                  {p.status === "vendido" ? "Vendido" : "Vender"}
                </button>
                
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removerProduto(p.id)}
                >
                  Remover
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;