import api from 'api';
import { Dispatch } from 'redux';
import {
  ProductImageActionTypes,
  ProductImageAction,
  ProductImageActionData,
  AddProductImagesAction,
} from 'store/types';

export const addProductImages = (
  productImages: ProductImageActionData[],
): AddProductImagesAction => {
  return {
    type: ProductImageActionTypes.ADD_PRODUCT_IMAGES,
    payload: productImages,
  };
};

export const fetchProductImages = () => {
  return async (dispatch: Dispatch<ProductImageAction>) => {
    try {
      const { data } = await api.get<ProductImageActionData[]>('/ProductImages');
      dispatch(addProductImages(data));
    } catch (error) {
      console.error(error);
    }
  };
};
