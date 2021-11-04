export interface Product {
    name: string; 
    id: string;
    link: string;
    slug: string;
    quantity: string;
    description: string;
    price: number;
    image: any;
    benefit: any;
}

export interface ProductProps {
  products?: Product[];
  product?: Product;
}