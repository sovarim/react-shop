import { Model, attr, ModelType, QuerySet } from 'redux-orm';
import { ProductVariationPropertyAction, ProductVariationPropertyActionTypes } from 'store/types';
import ProductVariationPropertyListValue from './ProductVariationPropertyListValue';
import ProductVariationPropertyValue from './ProductVariationPropertyValue';

interface ProductVariationPropertyFields {
  id: number;
  name: string;
  type: number;
  //@ts-ignore
  list_values?: QuerySet<ProductVariationPropertyListValue>;
  //@ts-ignore
  property_values?: QuerySet<ProductVariationPropertyValue>;
}

class ProductVariationProperty extends Model<
  //@ts-ignore
  typeof ProductVariationProperty,
  ProductVariationPropertyFields
> {
  static modelName = 'ProductVariationProperty' as const;

  static fields = {
    id: attr(),
    name: attr(),
    type: attr(),
  };

  static reducer(
    action: ProductVariationPropertyAction,
    //@ts-ignore
    ProducVariationProperty: ModelType<ProductVariationProperty>,
  ) {
    switch (action.type) {
      case ProductVariationPropertyActionTypes.ADD_PRODUCT_VARIATION_PROPERTIES:
        action.payload.forEach((productVariationProperty) =>
          ProducVariationProperty.upsert(productVariationProperty),
        );
        break;
      default:
        break;
    }
  }
}

export default ProductVariationProperty;
