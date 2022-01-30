import axios from "axios";
import { IReadTodo, ICreateTodo, IUpdateTodo } from "../interfaces/Todo";

const todoDataUrl = "http://localhost:3100/todos";
/**
 * getAllTodosData
 * @returns {Promise<IReadTodo>}
 */
export const getAllTodosData = async (): Promise<Array<IReadTodo>> => {
  const response = await axios.get(todoDataUrl);
  console.info("### getAllTodosData result ###");
  console.info(response.data);
  return response.data as Array<IReadTodo>;
};
/**
 * addTodoData
 * @param {ICreateTodo} todo
 * @returns {Promise<IReadTodo>}
 */
export const addTodoData = async (todo: ICreateTodo): Promise<IReadTodo> => {
  const response = await axios.post(todoDataUrl, todo);
  console.info("### addTodoData result ###");
  console.info(response.data);
  return response.data as IReadTodo;
};
/**
 * deleteTodoData
 * @param {string} id
 * @returns {Promise<string>}
 */
export const deleteTodoData = async (id: string): Promise<string> => {
  const response = await axios.delete(`${todoDataUrl}/${id}`);
  console.info("### deleteTodoData result ###");
  console.info(response.data);
  return id;
};
/**
 * updateTodoData
 * @param {string} id
 * @param {IUpdateTodo} todo
 * @returns {Promise<IReadTodo>}
 */
export const updateTodoData = async (
  id: string,
  todo: IUpdateTodo
): Promise<IReadTodo> => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  console.info("### updateTodoData result ###");
  console.info(response.data);
  return response.data as IReadTodo;
};
