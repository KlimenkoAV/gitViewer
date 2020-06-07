import { IRepository } from ".";

export interface IRepositoryRequest {
  items: IRepository[];
  incomplete_results: boolean;
  total_count: number;
}
