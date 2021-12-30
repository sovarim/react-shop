import { Dispatch } from 'redux';
import api from 'api';
import {
  CategoryActionTypes,
  CategoryFields,
  CategoryAction,
  AddCategoriesAction,
} from 'store/types';

export const addCategories = (category: CategoryFields[]): AddCategoriesAction => {
  return {
    type: CategoryActionTypes.ADD_CATEGORIES,
    payload: category,
  };
};

export const deleteCategory = (id: number) => {
  return {
    type: CategoryActionTypes.DELETE_CATEGORY,
    payload: id,
  };
};

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const { data } = await api.get<CategoryFields[]>('/Categories');
      dispatch(addCategories(data));
    } catch (error) {
      console.error(error);
    }
  };
};
