import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, switchMap, tap, startWith, skip } from "rxjs/operators";
import { of, combineLatest } from "rxjs";
import { IRepositoryParameters } from "../../models";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Output() changeFilter = new EventEmitter<IRepositoryParameters>();
  searchFormControl = new FormControl();
  userFormControl = new FormControl();
  paginationIndexControl = new FormControl();
  paginationSizeControl = new FormControl();
  @Input() total: number;
  @Input() page: number;
  @Input() perPage: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor() {}

  ngOnInit(): void {
    combineLatest([
      this.searchFormControl.valueChanges.pipe(startWith("")),
      this.userFormControl.valueChanges.pipe(startWith("")),
      this.paginationIndexControl.valueChanges.pipe(startWith(1)),
      this.paginationSizeControl.valueChanges.pipe(startWith(30)),
    ])
      .pipe(
        debounceTime(300),
        tap(([search, user, page, per_page]) =>
          this.changeFilter.emit({ search, user, page, per_page })
        )
      )
      .subscribe();
  }

  onPageChange(pageEvent: PageEvent) {
    this.paginationIndexControl.setValue(pageEvent.pageIndex + 1);
    this.paginationSizeControl.setValue(pageEvent.pageSize);
  }
}
