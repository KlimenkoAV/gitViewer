export interface IRepository {
  owner: Owner;
  name: string;
  created_at: string;
  language: string;
}

interface Owner {
  login: string;
}
