import { DtoCards } from "./dtoCards";
import Variables from "../../config/variables";
import AxiosApi from "../instances/api";
import { DtoCardsResponse } from "./dtoCardsResponse";

export class CardsService {
  static async getCards() {
    const url = `${Variables.urlApi}/cards`;
    const response = await AxiosApi.get<DtoCardsResponse>(url);
    return response;
  }

  static async createCard(newCard: Omit<DtoCards, "id">) {
    const url = `${Variables.urlApi}/cards`;

    const response = await AxiosApi.post<DtoCards>(url, newCard);

    return response;
  }

  static async updateCard(card: DtoCards) {
    const url = `${Variables.urlApi}/cards/${card.id}`;

    const response = await AxiosApi.put<DtoCards>(url, card);

    return response;
  }

  static async removeCard(cardId: string) {
    const url = `${Variables.urlApi}/cards/${cardId}`;

    const response = await AxiosApi.delete<DtoCardsResponse>(url);

    return response;
  }
}
