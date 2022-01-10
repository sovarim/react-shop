export interface CategoryActionData {
  id: number;
  name: string;
}

export enum CategoryActionTypes {
  ADD_CATEGORIES = 'ADD_CATEGORIES',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
}

export interface AddCategoriesAction {
  type: CategoryActionTypes.ADD_CATEGORIES;
  payload: CategoryActionData[];
}

export interface DeleteCategoryAction {
  type: CategoryActionTypes.DELETE_CATEGORY;
  payload: number;
}

export type CategoryAction = AddCategoriesAction | DeleteCategoryAction;

export interface ProductActionData {
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
  payload: ProductActionData[];
}

export type ProductAction = AddProductsAction;

export enum ProductImageActionTypes {
  ADD_PRODUCT_IMAGES = 'ADD_PRODUCT_IMAGES',
}

export interface ProductImageActionData {
  id: number;
  image_name: string;
  product_id: number;
  image_url: string;
}

export interface AddProductImagesAction {
  type: ProductImageActionTypes.ADD_PRODUCT_IMAGES;
  payload: ProductImageActionData[];
}

export type ProductImageAction = AddProductImagesAction;

export interface ProductVariationActionData {
  id: number;
  product_id: number;
  price: number;
  stock: number;
}

export enum ProductVariationActionTypes {
  ADD_PRODUCT_VARIATIONS = 'ADD_PRODUCT_VARIATIONS',
}

export interface AddProductVrationsAction {
  type: ProductVariationActionTypes.ADD_PRODUCT_VARIATIONS;
  paylaod: ProductVariationActionData[];
}

export type ProductVariationAction = AddProductVrationsAction;

export interface ProductVariationPropertyActionData {
  id: number;
  name: string;
  type: number;
}

export enum ProductVariationPropertyActionTypes {
  ADD_PRODUCT_VARIATION_PROPERTIES = 'ADD_PRODUCT_VARIATION_PROPERTIES',
}

export interface AddProductVariationPropertiesAction {
  type: ProductVariationPropertyActionTypes.ADD_PRODUCT_VARIATION_PROPERTIES;
  payload: ProductVariationPropertyActionData[];
}

export type ProductVariationPropertyAction = AddProductVariationPropertiesAction;

export interface ProductVariationPropertyListValueActionData {
  id: number;
  product_variation_property_id: number;
  title: string;
  value: string;
}

export enum ProductVariationPropertyListValueTypes {
  ADD_PRODUCT_VARIATION_LIST_VALUES = 'ADD_PRODUCT_VARIATION_LIST_VALUES',
}

export interface AddProductVariationListValuesAction {
  type: ProductVariationPropertyListValueTypes.ADD_PRODUCT_VARIATION_LIST_VALUES;
  payload: ProductVariationPropertyListValueActionData[];
}

export type ProductVariationListValueAction = AddProductVariationListValuesAction;

export interface ProductVariationPropertyValueActionData {
  id: number;
  product_variation_id: number;
  product_variation_property_id: number;
  product_variation_property_list_value_id: number | null;
  value_string: string | null;
  value_int: number | null;
  value_float: string | null;
}

export enum ProductVariationPropertyValueActionTypes {
  ADD_PRODUCT_VARIATION_VALUES = 'ADD_PRODUCT_VARIATION_VALUES',
}

export interface AddProductVariationPropertyValuesAction {
  type: ProductVariationPropertyValueActionTypes.ADD_PRODUCT_VARIATION_VALUES;
  payload: ProductVariationPropertyValueActionData[];
}

export type ProductVariationPropertyValueAction = AddProductVariationPropertyValuesAction;
