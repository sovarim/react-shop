import { createSelector } from 'redux-orm';
import orm from 'store/models';

export const categoriesSelector = createSelector(orm, (s) => s.Category.all().toRefArray());
export const productsSelector = createSelector(orm, (s) => s.Product.all().toRefArray());
