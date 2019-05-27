export interface CustomerDTO {
  id: string;
  name: string;
  surname?: string;
  email: string;
  phoneNumber?: string;
  lastOrderStatus?: string;
  totalOrders?: number;
}

export interface CustomerSearchDTO {
  name?: string;
  email?: string;
}

export interface Ialgo {
  'customers': CustomerDTO[];
}
