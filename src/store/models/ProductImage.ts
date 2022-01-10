import { Model, attr, fk } from 'redux-orm';
import { ProductImageAction, ProductImageActionTypes } from './../types';
import Product from './Product';

interface ProductImageFields {
  id: number;
  image_name: string;
  product?: Product;
  product_id: number;
  image_url: string;
}

//@ts-ignore
class ProductImage extends Model<typeof ProductImage, ProductImageFields> {
  static modelName = 'ProductImage' as const;

  static fields = {
    id: attr(),
    image_name: attr(),
    product_id: fk({
      to: 'Product',
      as: 'product',
      relatedName: 'images',
    }),
    image_url: attr(),
  };

  //@ts-ignore
  static reducer(action: ProductImageAction, ProductImage: ModelType<ProductImage>) {
    switch (action.type) {
      case ProductImageActionTypes.ADD_PRODUCT_IMAGES:
        action.payload.forEach((productImage) => ProductImage.upsert(productImage));
        break;
      default:
        break;
    }
  }
}

export default ProductImage;
