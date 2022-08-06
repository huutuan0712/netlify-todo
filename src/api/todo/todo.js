/* eslint-disable import/prefer-default-export */
import axiosClient from 'api/axiosClient';

const TODO_PATH = '/todo';
export const getTodo = () => axiosClient.get(TODO_PATH);
export const addTodo = (body) => axiosClient.post(TODO_PATH, body);
export const updateTodo = ({ id, ...rest }) =>
  axiosClient.put(`${TODO_PATH}/${id}`, rest);
export const deleteTodo = (id) => axiosClient.delete(`${TODO_PATH}/${id}`);
export const getTotoDetail = () => {};
