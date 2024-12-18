export interface Category {
    id: string;
    label: string;
}

export interface CategoryFilterProps {
    categories: Category[];
    selectedCategory: string;
    onSelectCategory: (categoryId: string) => void;
}