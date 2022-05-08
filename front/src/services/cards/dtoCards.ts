export enum StatusCard {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

export interface DtoCards {
  id: string;
  titulo: string;
  conteudo: string;
  lista: StatusCard;
}
