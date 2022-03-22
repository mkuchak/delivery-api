interface ICreateDeliveryDTO {
  item_name: string;
  id_customer: number;
  id_deliveryman?: number;
  started_at?: Date;
  delivered_at?: Date;
  canceled_at?: Date;
}

export { ICreateDeliveryDTO }
