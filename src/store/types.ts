export interface CategoryFields {
  id: number;
  name: string;
}

export enum CategoryActionTypes {
  ADD_CATEGORIES = 'ADD_CATEGORIES',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
}

export interface AddCategoriesAction {
  type: CategoryActionTypes.ADD_CATEGORIES;
  payload: { id: number; name: string }[];
}

export interface DeleteCategoryAction {
  type: CategoryActionTypes.DELETE_CATEGORY;
  payload: number;
}

export type CategoryAction = AddCategoriesAction | DeleteCategoryAction;

export interface ProductFields {
  id: number;
  name: string;
  category_id: number;
  description: string;
}

export enum ProducActionTypes {
  ADD_PRODUCTS = 'ADD_PRODUCTS',
}

export interface AddProductsAction {
  type: ProducActionTypes.ADD_PRODUCTS;
  payload: {
    id: number;
    name: string;
    category_id: number;
    description: string;
  }[];
}

export type ProductAction = AddProductsAction;
