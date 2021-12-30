import { ORM } from 'redux-orm';
import Category from './Category';
import Product from './Product';

const schema = { Category, Product };

type Schema = typeof schema;

const orm = new ORM<Schema>({
  stateSelector: (state) => state.orm,
});
orm.register(Category, Product);

export default orm;
