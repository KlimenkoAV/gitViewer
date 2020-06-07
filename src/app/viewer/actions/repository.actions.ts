import { createAction, props } from "@ngrx/store";
import {
  IRepository,
  IRepositoryParameters,
  IRepositoryRequest,
} from "../models";

export const getRepositories = createAction(
  "[Repositories Page] Get Repositories",
  props<{ repositoriesParams?: IRepositoryParameters }>()
);
export const getRepositoriesSuccess = createAction(
  "[Repositories Page] Get Repositories Success",
  props<{ repositoryRequest: IRepositoryRequest }>()
);
export const getRepositoriesFailrue = createAction(
  "[Repositories Page] Get Repositories Failrue",
  props<any>()
);
