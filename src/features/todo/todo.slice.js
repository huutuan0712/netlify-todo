import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: undefined,
  },
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
    resetTodo: (state, action) => {
      state.todos = [];
    },
  },
});

export const { setTodo, resetTodo } = todoSlice.actions;
export default todoSlice.reducer;
