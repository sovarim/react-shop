import api from 'api';
import { Dispatch } from 'redux';
import {
  ProductVariationPropertyListValueTypes,
  AddProductVariationListValuesAction,
  ProductVariationListValueAction,
  ProductVariationPropertyListValueActionData,
} from 'store/types';

export const addProductVariationListValues = (
  productVariationListValues: ProductVariationPropertyListValueActionData[],
): AddProductVariationListValuesAction => {
  return {
    type: ProductVariationPropertyListValueTypes.ADD_PRODUCT_VARIATION_LIST_VALUES,
    payload: productVariationListValues,
  };
};

export const fetchProductVariationListValues = () => {
  return async (dispatch: Dispatch<ProductVariationListValueAction>) => {
    try {
      const { data } = await api.get<ProductVariationPropertyListValueActionData[]>(
        '/ProductVariationPropertyListValues',
      );
      dispatch(addProductVariationListValues(data));
    } catch (error) {
      console.error(error);
    }
  };
};
