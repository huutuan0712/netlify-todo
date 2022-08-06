import todoSlice from 'features/todo/todo.slice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: todoSlice,
});
export default rootReducer;
