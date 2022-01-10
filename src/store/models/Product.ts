import { AddProductsAction, ProducActionTypes } from 'store/types';
import { attr, Model, fk, ModelType, QuerySet } from 'redux-orm';
import Category from './Category';
import ProductImage from './ProductImage';
import ProductVaration from './ProductVariation';

interface ProductFields {
  id: number;
  name: string;
  category?: Category;
  category_id: number;
  description: string;
  //@ts-ignore
  images?: QuerySet<ProductImage>;
  //@ts-ignore
  variations?: QuerySet<ProductVaration>;
}

// @ts-ignore
class Product extends Model<typeof Product, ProductFields> {
  static modelName = 'Product' as const;

  static fields = {
    id: attr(),
    name: attr(),
    category_id: fk({
      to: 'Category',
      as: 'category',
      relatedName: 'products',
    }),
    description: attr(),
  };
  // @ts-ignore
  static reducer(action: AddProductsAction, Product: ModelType<Product>) {
    switch (action.type) {
      case ProducActionTypes.ADD_PRODUCTS:
        action.payload.forEach((product) => Product.upsert(product));
        break;
      default:
        break;
    }
  }
}

export default Product;
