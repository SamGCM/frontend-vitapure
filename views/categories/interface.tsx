export interface Category{
    id: number;
    name: string;
    slug: string;
    products: any;
}

export interface CategoriesProps {
    category?: Category;
    // categories?: Category[];
}