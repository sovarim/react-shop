import { attr, fk, Model, ModelType } from 'redux-orm';
import ProductVariation from './ProductVariation';
import ProductVariationProperty from './ProductVariationProperty';
import ProductVariationPropertyListValue from './ProductVariationPropertyListValue';
import {
  ProductVariationPropertyValueActionTypes,
  ProductVariationPropertyValueAction,
} from 'store/types';

interface ProductVariationPropertyValueFields {
  id: number;
  variation?: ProductVariation;
  product_variation_id: number;
  variation_property?: ProductVariationProperty;
  product_variation_property_id: number;
  variation_property_list_value?: ProductVariationPropertyListValue;
  product_variation_property_list_value_id: number | null;
  value_string: string | null;
  value_int: number | null;
  value_float: string | null;
}

class ProductVariationPropertyValue extends Model<
  //@ts-ignore
  typeof ProductVariationPropertyValue,
  ProductVariationPropertyValueFields
> {
  static modelName = 'ProductVariationPropertyValue' as const;

  static fields = {
    id: attr(),
    product_variation_id: fk({
      to: 'ProductVariation',
      as: 'variation',
      relatedName: 'property_values',
    }),
    product_variation_property_id: fk({
      to: 'ProductVariationProperty',
      as: 'variation_property',
      relatedName: 'property_values',
    }),
    product_variation_property_list_value_id: fk({
      to: 'ProductVariationPropertyListValue',
      as: 'variation_property_list_value',
      relatedName: 'property_values',
    }),
    value_string: attr(),
    value_int: attr(),
    value_float: attr(),
  };

  static reducer(
    action: ProductVariationPropertyValueAction,
    //@ts-ignore
    ProductVariationPropertyValue: ModelType<ProductVariationPropertyValue>,
  ) {
    switch (action.type) {
      case ProductVariationPropertyValueActionTypes.ADD_PRODUCT_VARIATION_VALUES:
        action.payload.forEach((productVariationPropertyValue) =>
          ProductVariationPropertyValue.upsert(productVariationPropertyValue),
        );
        break;
      default:
        break;
    }
  }
}

export default ProductVariationPropertyValue;
