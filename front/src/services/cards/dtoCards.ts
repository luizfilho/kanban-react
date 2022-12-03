export enum StatusCard {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

export interface DtoCards {
  id: string;
  title: string;
  body: string;
  status: StatusCard;
}

export type DtoCard = Omit<DtoCards, "id">;
