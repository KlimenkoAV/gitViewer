import * as fromRepositories from "./repositories.reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

export interface RepositoriesModuleState {
  repositories: fromRepositories.State;
}

export interface State {
  repositories: RepositoriesModuleState;
}

export const reducers: ActionReducerMap<RepositoriesModuleState, any> = {
  repositories: fromRepositories.reducer,
};

export const getRepositoriesFeatureSelector = createFeatureSelector<
  State,
  RepositoriesModuleState
>("repositories");

export const getRepositoriesSelector = createSelector(
  getRepositoriesFeatureSelector,
  (state: RepositoriesModuleState) => state.repositories
);

export const getRepositories = createSelector(
  getRepositoriesSelector,
  fromRepositories.selectRepositories
);

export const getRepositoriesLoading = createSelector(
  getRepositoriesSelector,
  (state: fromRepositories.State) => state.loading
);

export const getRepositoriesLoaded = createSelector(
  getRepositoriesSelector,
  (state: fromRepositories.State) => state.loaded
);

export const getRepositoriesPerPage = createSelector(
  getRepositoriesSelector,
  (state: fromRepositories.State) => state.per_page
);

export const getRepositoriesPage = createSelector(
  getRepositoriesSelector,
  (state: fromRepositories.State) => state.page
);

export const getRepositoriesTotal = createSelector(
  getRepositoriesSelector,
  (state: fromRepositories.State) => state.total
);

export const { selectAll: getrepos } = fromRepositories.adapter.getSelectors(
  getRepositoriesSelector
);
