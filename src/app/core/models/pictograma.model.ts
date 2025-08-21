import { Categoria } from './categoria.model';

export interface Pictograma {
    id: string;
    label: string;       // texto exibido
    imagemUrl: string;   // caminho do pictograma
    categoria: Categoria;
    audioUrl?: string;   // cache de voz gerada
}
