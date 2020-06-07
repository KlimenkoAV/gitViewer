import { Component, OnInit, Self } from "@angular/core";
import * as fromRepositories from "@viewer/reducers";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { mergeMap, takeUntil } from "rxjs/operators";
import { RepositoryActions } from "@app/viewer/actions";
import { NgOnDestroy } from "@app/services/destroy.service";

@Component({
  selector: "app-repositories-page",
  templateUrl: "./repositories-page.component.html",
  styleUrls: ["./repositories-page.component.scss"],
  providers: [NgOnDestroy],
})
export class RepositoriesPageComponent implements OnInit {
  constructor(
    private store: Store<fromRepositories.State>,
    private route: ActivatedRoute,
    @Self() private onDestroy$: NgOnDestroy
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe
      // mergeMap((params) => [RepositoryActions.getRepositories({})]),
      // takeUntil(this.onDestroy$)
      ()
      .subscribe(this.store);
  }
}
