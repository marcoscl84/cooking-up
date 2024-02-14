// import type ICategoria from '@/interfaces/ICategoria';

// export async function obterCategorias(){
//     const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');

//     const categorias: ICategoria[] = await response.json();

//     return categorias;
// }

import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
}