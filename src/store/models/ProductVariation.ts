import { ProductVariationAction, ProductVariationActionTypes } from 'store/types';
import { Model, fk, attr, ModelType, QuerySet } from 'redux-orm';
import Product from './Product';
import ProductVariationPropertyValue from './ProductVariationPropertyValue';

interface ProductVariationFields {
  id: number;
  product?: Product;
  product_id: number;
  price: number;
  stock: number;
  //@ts-ignore
  property_values?: QuerySet<ProductVariationPropertyValue>;
}

//@ts-ignore
class ProductVariation extends Model<typeof ProductVariation, ProductVariationFields> {
  static modelName = 'ProductVariation' as const;

  static fields = {
    id: attr(),
    product_id: fk({
      to: 'Product',
      as: 'product',
      relatedName: 'variations',
    }),
    price: attr(),
    stock: attr(),
  };

  //@ts-ignore
  static reducer(action: ProductVariationAction, ProductVariation: ModelType<ProductVariation>) {
    switch (action.type) {
      case ProductVariationActionTypes.ADD_PRODUCT_VARIATIONS:
        action.paylaod.map((productVariation) => ProductVariation.upsert(productVariation));
        break;
      default:
        break;
    }
  }
}

export default ProductVariation;
