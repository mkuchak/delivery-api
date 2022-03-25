interface IAccountDTO {
  id?: number;
  email: string;
  password: string;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
}

export { IAccountDTO }
