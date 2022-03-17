class Customer {
  id: number;
  email: string;
  password: string;
  name?: string;
  created_at?: Date = new Date();
  updated_at?: Date = new Date();
}

export { Customer }
