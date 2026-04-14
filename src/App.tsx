import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Produtos from "./components/Produtos";
import Sobre from "./components/Sobre";
import type { Produto } from "./types/Produto";

function App() {
  const [pagina, setPagina] = useState("dashboard");

  const [produtos, setProdutos] = useState<Produto[]>([
    {
      id: 1,
      nome: "Camisa LeBron Lakers",
      preco: 199.9,
      status: "disponivel",
      imagem: "camisa.png"
    },
    {
      id: 2,
      nome: "Tênis LeBron 21",
      preco: 899.9,
      status: "disponivel",
      imagem: "tenis.png"
    },
    {
      id: 3,
      nome: "Faixa de cabeça",
      preco: 49.9,
      status: "disponivel",
      imagem: "faixa.png"
    }
  ]);

  const venderProduto = (id: number) => {
    setProdutos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "vendido" } : p
      )
    );
  };

  const adicionarProduto = (novoProduto: Produto) => {
    setProdutos((prev) => [...prev, novoProduto]);
  };

  const removerProduto = (id: number) => {
  const confirmar = confirm("Tem certeza que deseja remover este produto?");

  if (!confirmar) return;

  setProdutos(produtos.filter(p => p.id !== id));
  };

  return (
    <div>
    <h1 className="text-center my-4">Site do LeBron James</h1>

      <Navbar setPagina={setPagina} />

      {pagina === "dashboard" && <Dashboard produtos={produtos} />}
      {pagina === "produtos" && (
        <Produtos
          produtos={produtos}
          venderProduto={venderProduto}
          adicionarProduto={adicionarProduto}
          removerProduto={removerProduto}
        />
      )}
      {pagina === "sobre" && <Sobre />}
    </div>
  );
}

export default App;