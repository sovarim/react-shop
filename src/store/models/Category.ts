import { attr, Model, ModelType } from 'redux-orm';
import { CategoryActionTypes, CategoryAction, CategoryFields } from '../types';

// @ts-ignore
class Category extends Model<typeof Category, CategoryFields> {
  static modelName = 'Category' as const;

  static fields = {
    id: attr(),
    name: attr(),
  };
  // @ts-ignore
  static reducer(action: CategoryAction, Category: ModelType<Category>) {
    switch (action.type) {
      case CategoryActionTypes.ADD_CATEGORIES:
        action.payload.forEach((category) => Category.create(category));
        break;
      case CategoryActionTypes.DELETE_CATEGORY:
        Category.filter((category) => category.id === action.payload).delete();
        break;
      default:
        break;
    }
  }
}

export default Category;
