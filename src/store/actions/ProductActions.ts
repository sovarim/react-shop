import api from 'api';
import { Dispatch } from 'redux';
import {
  AddProductsAction,
  ProducActionTypes,
  ProductAction,
  ProductActionData,
} from 'store/types';

export const addProducts = (products: ProductActionData[]): AddProductsAction => {
  return {
    type: ProducActionTypes.ADD_PRODUCTS,
    payload: products,
  };
};

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const { data } = await api.get<ProductActionData[]>('/Products');
      dispatch(addProducts(data));
    } catch (error) {
      console.error(error);
    }
  };
};
