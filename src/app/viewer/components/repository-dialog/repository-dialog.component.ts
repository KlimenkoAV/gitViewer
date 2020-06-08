import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { IRepository } from "@app/viewer/models";

@Component({
  selector: "app-repository-dialog",
  templateUrl: "./repository-dialog.component.html",
  styleUrls: ["./repository-dialog.component.scss"],
})
export class RepositoryDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RepositoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { repository: IRepository }
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}
