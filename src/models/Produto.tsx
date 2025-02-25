import Categoria from './Categoria';

export default interface Produto {
  preco: string | number | readonly string[] | undefined;
  id: number;
  nome: string;
  preço: string;
  foto: string;
  categoria: Categoria | null;
}