export interface Produto {
  id: number;
  nome: string;
  preco: number;
  status: "disponivel" | "vendido";
  imagem: string;
}