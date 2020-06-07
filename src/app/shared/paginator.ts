import { MatPaginatorIntl } from "@angular/material/paginator";

export class Paginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = "Следующая страница";
    this.previousPageLabel = "Предыдущая страница";
    this.itemsPerPageLabel = "Количество элементов на странице";
  }

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return "0 из " + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;

    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return startIndex + 1 + " - " + endIndex + " из " + length;
  };
}
