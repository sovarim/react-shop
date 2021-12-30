import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReducer } from 'redux-orm';
import thunk from 'redux-thunk';
import orm from './models';

const rootReducer = combineReducers({
  orm: createReducer(orm),
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
