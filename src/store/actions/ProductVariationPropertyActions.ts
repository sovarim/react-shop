import api from 'api';
import { Dispatch } from 'redux';
import {
  ProductVariationPropertyAction,
  ProductVariationPropertyActionTypes,
  AddProductVariationPropertiesAction,
  ProductVariationPropertyActionData,
} from 'store/types';

export const addProductVariationProperties = (
  productVariationProperties: ProductVariationPropertyActionData[],
): AddProductVariationPropertiesAction => {
  return {
    type: ProductVariationPropertyActionTypes.ADD_PRODUCT_VARIATION_PROPERTIES,
    payload: productVariationProperties,
  };
};

export const fetchProductVariationProperties = () => {
  return async (dispatch: Dispatch<ProductVariationPropertyAction>) => {
    try {
      const { data } = await api.get<ProductVariationPropertyActionData[]>(
        '/ProductVariationProperties',
      );
      dispatch(addProductVariationProperties(data));
    } catch (error) {
      console.error(error);
    }
  };
};
