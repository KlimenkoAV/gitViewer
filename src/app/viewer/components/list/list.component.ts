import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { IRepository } from "@app/viewer/models";
import { Sort } from "@angular/material/sort";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @Input() repositories: IRepository[];
  @Input() page: number = 1;
  @Input() perPage: number = 30;
  public displayedColumns: string[] = [
    "number",
    "language",
    "name_repository",
    "name_user",
    "created",
  ];
  @Input() repositoriesLoading: boolean;
  constructor() {}

  sortRepositories: IRepository[];
  ngOnInit(): void {}

  ngOnChanges(sc: SimpleChanges) {
    if (sc.repositories) {
      this.sortRepositories = [...this.repositories];
    }
  }

  onClick(row: IRepository) {
    console.log(row);
  }

  sortData(sort: Sort) {
    this.sortRepositories = [...this.repositories];
    if (sort.direction === "asc") {
      if (sort.active === "name_user") {
        this.repositories.sort((a, b) => {
          return a.owner.login < b.owner.login ? 1 : -1;
        });
      } else if (sort.active === "name_repository") {
        this.sortRepositories.sort((a, b) => {
          return a.name < b.name ? 1 : -1;
        });
      }
    } else if (sort.direction === "desc") {
      if (sort.active === "name_user") {
        this.sortRepositories.sort((a, b) => {
          return a.owner.login > b.owner.login ? 1 : -1;
        });
      } else if (sort.active === "name_repository") {
        this.sortRepositories.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
      }
    }
  }
}
