import { Dispatch } from 'redux';
import api from 'api';
import {
  CategoryActionTypes,
  CategoryActionData,
  CategoryAction,
  AddCategoriesAction,
} from 'store/types';

export const addCategories = (category: CategoryActionData[]): AddCategoriesAction => {
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
      const { data } = await api.get<CategoryActionData[]>('/Categories');
      dispatch(addCategories(data));
    } catch (error) {
      console.error(error);
    }
  };
};
