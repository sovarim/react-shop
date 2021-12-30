import { ProductFields, AddProductsAction, ProducActionTypes } from 'store/types';
import { attr, Model, fk, ModelType } from 'redux-orm';

// @ts-ignore
class Product extends Model<typeof Product, ProductFields> {
  static modelName = 'Product' as const;

  static fields = {
    id: attr(),
    name: attr(),
    category_id: fk('Category', 'category'),
    description: attr(),
  };
  // @ts-ignore
  static reducer(action: AddProductsAction, Product: ModelType<Product>) {
    switch (action.type) {
      case ProducActionTypes.ADD_PRODUCTS:
        action.payload.forEach((product) => Product.create(product));
        break;
      default:
        break;
    }
  }
}

export default Product;
