import { ORM } from 'redux-orm';
import Category from './Category';
import Product from './Product';
import ProductImage from './ProductImage';
import ProductVariation from './ProductVariation';
import ProductVariationProperty from './ProductVariationProperty';
import ProductVariationPropertyListValue from './ProductVariationPropertyListValue';
import ProductVariationPropertyValue from './ProductVariationPropertyValue';

const schema = {
  Category,
  Product,
  ProductImage,
  ProductVariation,
  ProductVariationProperty,
  ProductVariationPropertyListValue,
  ProductVariationPropertyValue,
};

type Schema = typeof schema;

const orm = new ORM<Schema>({
  stateSelector: (state) => state.orm,
});
orm.register(
  Category,
  Product,
  ProductImage,
  ProductVariation,
  ProductVariationProperty,
  ProductVariationPropertyListValue,
  ProductVariationPropertyValue,
);

export default orm;
