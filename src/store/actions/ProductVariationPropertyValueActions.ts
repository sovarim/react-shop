import api from 'api';
import { Dispatch } from 'react';
import {
  ProductVariationPropertyValueAction,
  ProductVariationPropertyValueActionTypes,
  ProductVariationPropertyValueActionData,
  AddProductVariationPropertyValuesAction,
} from 'store/types';

export const addProductVarationPropertyValues = (
  productVarationPropertyValues: ProductVariationPropertyValueActionData[],
): AddProductVariationPropertyValuesAction => {
  return {
    type: ProductVariationPropertyValueActionTypes.ADD_PRODUCT_VARIATION_VALUES,
    payload: productVarationPropertyValues,
  };
};

export const fetchProductVarationPropertyValues = () => {
  return async (dispatch: Dispatch<ProductVariationPropertyValueAction>) => {
    try {
      const { data } = await api.get<ProductVariationPropertyValueActionData[]>(
        '/ProductVariationPropertyValues',
      );
      dispatch(addProductVarationPropertyValues(data));
    } catch (error) {
      console.error(error);
    }
  };
};
