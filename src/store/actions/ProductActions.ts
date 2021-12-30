import api from 'api';
import { Dispatch } from 'redux';
import { ProducActionTypes, ProductAction, ProductFields } from 'store/types';

export const addProducts = (products: ProductFields[]) => {
  return {
    type: ProducActionTypes.ADD_PRODUCTS,
    payload: products,
  };
};

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const { data } = await api.get<ProductFields[]>('/Products');
      dispatch(addProducts(data));
    } catch (error) {
      console.error(error);
    }
  };
};
