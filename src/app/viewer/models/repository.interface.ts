export interface IRepository {
  owner: Owner;
  name: string;
  created_at: string;
  language: string;
  description: string;
  full_name: string;
  fork: number;
  watchers: number;
  open_issues: number;
}

interface Owner {
  login: string;
  avatar_url: string;
  type: string;
}
