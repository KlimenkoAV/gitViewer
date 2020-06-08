import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IRepositoryParameters, IRepositoryRequest } from "../models";

@Injectable({
  providedIn: "root",
})
export class RepositoriesService {
  public url = "https://api.github.com/search/repositories";

  constructor(protected http: HttpClient) {}

  /**
   * Получение репозиториев по имени
   */
  getRepositories(
    params: IRepositoryParameters
  ): Observable<IRepositoryRequest> {
    let url = this.url + "?";

    if (params.page) {
      url = url.concat(`page=${params.page}&`);
    }
    if (params.per_page) {
      url = url.concat(`per_page=${params.per_page}&`);
    }
    if (params.search) {
      url = url.concat(`q=${params.search}`);
      if (params.user) {
        url = url.concat(`+user:${params.user}`);
      }
    } else if (params.user) {
      url = url.concat(`q=user:${params.user}`);
    }
    return this.http.get<IRepositoryRequest>(url).pipe();
  }
}
