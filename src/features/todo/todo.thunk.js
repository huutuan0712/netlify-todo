/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, getTodo, updateTodo } from 'api/todo/todo';

const addTodoAction = createAsyncThunk(
  'todo/addTodoAction',
  async (params, { rejectWithValue }) => {
    try {
      const res = await addTodo(params);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const deleteTodoAction = createAsyncThunk(
  'todo/deleteTodoAction',
  async (params, { rejectWithValue }) => {
    try {
      const res = await deleteTodo(params);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const updateTodoAction = createAsyncThunk(
  'todo/updateTodoAction',
  async (params, { rejectWithValue }) => {
    try {
      const res = await updateTodo(params);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const getTodoAction = createAsyncThunk(
  'todo/getTodoAction',
  async (params, { rejectWithValue }) => {
    try {
      const res = await getTodo(params);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export { addTodoAction, getTodoAction, deleteTodoAction, updateTodoAction };
