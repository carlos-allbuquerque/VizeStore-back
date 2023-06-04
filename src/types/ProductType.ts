export type createProductData = {
  name: string;
  imageUrl: string;
  details?: object;
  brand?: string;
  category: "monitors" | "CPUs" | "GPUs" | "cabinets";
  price: number;
  stock: number;
};
