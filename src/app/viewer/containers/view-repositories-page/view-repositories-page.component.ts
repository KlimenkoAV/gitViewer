import { Component, OnInit } from "@angular/core";
import { IRepositoryParameters, IRepository } from "../../models";
import { Store, select } from "@ngrx/store";
import * as fromRepositories from "@viewer/reducers";
import { RepositoryActions } from "@app/viewer/actions";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-view-repositories-page",
  templateUrl: "./view-repositories-page.component.html",
  styleUrls: ["./view-repositories-page.component.scss"],
})
export class ViewRepositoriesPageComponent implements OnInit {
  repositories$: Observable<IRepository[]>;
  repositoriesLoading$: Observable<boolean>;
  repositoriesLoaded$: Observable<boolean>;
  total$: Observable<number>;
  perPage$: Observable<number>;
  page$: Observable<number>;

  constructor(private store: Store<fromRepositories.State>) {
    this.repositories$ = this.store.pipe(
      select(fromRepositories.getRepositories)
    );
    this.repositoriesLoading$ = this.store.pipe(
      select(fromRepositories.getRepositoriesLoading)
    );
    this.repositoriesLoaded$ = this.store.pipe(
      select(fromRepositories.getRepositoriesLoaded)
    );
    this.total$ = this.store.pipe(
      select(fromRepositories.getRepositoriesTotal)
    );
    this.perPage$ = this.store.pipe(
      select(fromRepositories.getRepositoriesPerPage)
    );
    this.page$ = this.store.pipe(select(fromRepositories.getRepositoriesPage));
  }

  ngOnInit(): void {}

  onChange(repositoriesParams: IRepositoryParameters) {
    this.store.dispatch(
      RepositoryActions.getRepositories({ repositoriesParams })
    );
  }
}
