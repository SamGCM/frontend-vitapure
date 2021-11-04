export interface Category{
    id: number;
    name_category: string;
    slug: string;
    products: any;
}

export interface CategoriesProps {
    category?: Category;
    // categories?: Category[];
}