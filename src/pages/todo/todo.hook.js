import {
  addTodoAction,
  deleteTodoAction,
  getTodoAction,
  updateTodoAction,
} from 'features/todo/todo.thunk';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useLoading } from 'hooks/useLoading';
import { setTodo, resetTodo } from 'features/todo/todo.slice';
import { toastError, toastSuccess } from 'utils/toast';
import { Status } from 'constants';

export default function useTodo() {
  const dispatch = useDispatch();
  const loading = useLoading();
  const getTodo = () => {
    loading.show();
    dispatch(getTodoAction())
      .then(unwrapResult)
      .then((res) => {
        dispatch(setTodo(res.reverse()));
      })
      .catch((err) => toastError('Error to load todo', err))
      .finally(() => loading.hide());
  };

  const deletetodo = (id) =>
    dispatch(deleteTodoAction(id))
      .then(unwrapResult)
      .then((res) => {
        toastSuccess(`Deleted ${res?.id} succcess`);
      })
      .catch((err) => toastError('Error to delete todo', err));

  const clearAll = (todos) => {
    loading.show();
    Promise.all(todos?.map((todo) => deletetodo(todo.id)))
      .then((res) => {
        dispatch(resetTodo());
      })
      .catch((err) => {
        console.log('🚀 ~ file: todo.hook.js ~ line 43 ~ clearAll ~ err', err);
      })
      .finally(() => loading.hide());
  };
  const addTodo = ({ name, status }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    dispatch(addTodoAction({ name, status }))
      .then(unwrapResult)
      .then(() => {
        getTodo();
        toastSuccess('Todo added successfully');
      })
      .catch((err) => {
        toastError('Error adding todo::', err);
      });
  const updateStatusTodo = (id, data, callback) => {
    loading.show();
    dispatch(updateTodoAction({ id, ...data }))
      .then(unwrapResult)
      .then(() => {
        getTodo();
        callback?.();
        toastSuccess(`Todo ${data?.status || 'update'} successfully`);
      })
      .catch((err) => {
        toastError('Error adding todo::', err);
      })
      .finally(() => loading.hide());
  };
  return { getTodo, addTodo, updateStatusTodo, clearAll };
}
