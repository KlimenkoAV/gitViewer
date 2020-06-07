import { Action, createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { IRepository } from "@viewer/models";
import { RepositoryActions } from "../actions";

export interface State extends EntityState<IRepository> {
  loading: boolean;
  loaded: boolean;
  total: number;
  page: number;
  per_page: number;
}

export const adapter: EntityAdapter<IRepository> = createEntityAdapter<
  IRepository
>({
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false,
  total: 0,
  page: 0,
  per_page: 30,
});

export const reducer = createReducer(
  initialState,
  on(RepositoryActions.getRepositories, (state, { repositoriesParams }) => ({
    ...state,
    page: repositoriesParams.page,
    per_page: repositoriesParams.per_page,
    loading: true,
    loaded: false,
  })),
  on(RepositoryActions.getRepositoriesSuccess, (state, { repositoryRequest }) =>
    adapter.addAll(repositoryRequest.items, {
      ...state,
      total: repositoryRequest.total_count,
      loading: false,
      loaded: true,
    })
  ),
  on(RepositoryActions.getRepositoriesFailrue, (state) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);

export const { selectAll: selectRepositories } = adapter.getSelectors();
