import api from 'api';
import { Dispatch } from 'redux';
import {
  ProductVariationActionTypes,
  AddProductVrationsAction,
  ProductVariationActionData,
  ProductVariationAction,
} from 'store/types';

export const addProductVariations = (
  productVariations: ProductVariationActionData[],
): AddProductVrationsAction => {
  return {
    type: ProductVariationActionTypes.ADD_PRODUCT_VARIATIONS,
    paylaod: productVariations,
  };
};

export const fetchProductVariations = () => {
  return async (dispatch: Dispatch<ProductVariationAction>) => {
    try {
      const { data } = await api.get<ProductVariationActionData[]>('/ProductVariations');
      dispatch(addProductVariations(data));
    } catch (error) {
      console.error(error);
    }
  };
};
