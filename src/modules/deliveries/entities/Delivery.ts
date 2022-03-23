class Delivery {
  id: number;
  item_name: string;
  id_customer: number;
  id_deliveryman?: number;
  started_at?: Date;
  delivered_at?: Date;
  canceled_at?: Date;
  created_at?: Date = new Date();
}

export { Delivery }
