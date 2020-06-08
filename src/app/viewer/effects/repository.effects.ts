import { ActionsSubject, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import * as fromRepositories from "@viewer/reducers";
import { createEffect, ofType } from "@ngrx/effects";
import { RepositoryActions } from "../actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { RepositoriesService } from "../services/repository.service";
import { of } from "rxjs";

@Injectable()
export class RepositoriesEffects {
  constructor(
    private actions$: ActionsSubject,
    private repositoriesService: RepositoriesService
  ) {}

  getRepositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepositoryActions.getRepositories),
      switchMap(({ repositoriesParams }) =>
        this.repositoriesService.getRepositories(repositoriesParams).pipe(
          map((repositoryRequest) =>
            RepositoryActions.getRepositoriesSuccess({ repositoryRequest })
          ),
          catchError((error) =>
            of(RepositoryActions.getRepositoriesFailrue({ error }))
          )
        )
      )
    )
  );
}
