export interface Relatorio {
    id: string;
    usuarioId: string;
    data: Date;
    pictogramasSelecionados: string[]; // ids dos pictogramas usados
    duracaoSessao: number; // em segundos
}
