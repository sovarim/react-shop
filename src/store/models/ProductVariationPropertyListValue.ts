import { attr, fk, Model, ModelType } from 'redux-orm';
import {
  ProductVariationListValueAction,
  ProductVariationPropertyListValueTypes,
} from 'store/types';
import ProductVariationProperty from './ProductVariationProperty';
import ProductVariationPropertyValue from './ProductVariationPropertyValue';

export interface ProductVariationPropertyListValueFields {
  id: number;
  property?: ProductVariationProperty;
  product_variation_property_id: number;
  title: string;
  value: string;
  //@ts-ignore
  property_values?: QuerySet<ProductVariationPropertyValue>;
}

class ProductVariationPropertyListValue extends Model<
  //@ts-ignore
  typeof ProductVariationPropertyListValue,
  ProductVariationPropertyListValueFields
> {
  static modelName = 'ProductVariationPropertyListValue' as const;

  static fields = {
    id: attr(),
    product_variation_property_id: fk({
      to: 'ProductVariationProperty',
      as: 'property',
      relatedName: 'list_values',
    }),
  };

  static reducer(
    action: ProductVariationListValueAction,
    //@ts-ignore
    ProductVariationPropertyListValue: ModelType<ProductVariationPropertyListValue>,
  ) {
    switch (action.type) {
      case ProductVariationPropertyListValueTypes.ADD_PRODUCT_VARIATION_LIST_VALUES:
        action.payload.forEach((productVariationPropertyListValue) =>
          ProductVariationPropertyListValue.upsert(productVariationPropertyListValue),
        );
        break;
      default:
        break;
    }
  }
}

export default ProductVariationPropertyListValue;
