import createNewNoteApiModel from "../../models/apiModel/createNewNoteApiModel";
import ApiService from "./ApiService";

export default class NoteApi {
  static async create(data: createNewNoteApiModel) {
    let response = await ApiService.send({
      url: "/api/Note/createnote",
      method: "POST",
      data,
    });

    return response;
  }

  static async getAll(data: { pageSize: number; pageNumber: number }) {
    const queryParams = Object.entries(data)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    let response = await ApiService.send({
      url: `/api/Note/getallnotes?${queryParams}`,
      method: "GET",
      data,
    });

    return response;
  }

  static async delete(data: {id : string}) {
    let response = await ApiService.send({
      url: "/api/Note/deletenote",
      method: "POST",
      data,
    });

    return response;
  }
}
