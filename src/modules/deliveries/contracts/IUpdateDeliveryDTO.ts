interface IUpdateDeliveryDTO {
  id: number;
  item_name?: string;
  id_deliveryman?: number;
  delivered_at?: Date;
  canceled_at?: Date;
}

export { IUpdateDeliveryDTO }
