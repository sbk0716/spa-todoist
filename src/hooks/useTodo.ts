import { useState, useEffect } from "react";

import { ulid } from "ulid";

import * as todoData from "../apis/todos";
import { IReadTodo } from "../interfaces/Todo";

interface IUseTodoResponse {
  todoList: Array<IReadTodo>;
  toggleTodoListItemStatus: (arg1: string, arg2: boolean) => void;
  addTodoListItem: (arg1: string) => void;
  deleteTodoListItem: (arg1: string) => void;
}
/**
 * useTodo
 * @returns {IUseTodoResponse}
 */
export const useTodo = () => {
  const [todoList, setTodoList] = useState<Array<IReadTodo>>([]);

  useEffect(() => {
    todoData
      .getAllTodosData()
      .then((todo: Array<IReadTodo>) => {
        setTodoList([...todo].reverse());
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  }, []);

  /**
   * toggleTodoListItemStatus
   * @param {string} id
   * @param {boolean} done
   */
  const toggleTodoListItemStatus = (id: string, done: boolean): void => {
    const todoItem = todoList.find((item: IReadTodo) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done };
    todoData
      .updateTodoData(id, newTodoItem)
      .then((updatedTodo) => {
        const newTodoList = todoList.map((item) =>
          item.id !== updatedTodo.id ? item : updatedTodo
        );
        setTodoList(newTodoList);
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  };
  /**
   * addTodoListItem
   * @param {string} todoContent
   */
  const addTodoListItem = (todoContent: string): void => {
    const newTodoItem: IReadTodo = {
      content: todoContent,
      id: ulid(),
      done: false,
    };
    todoData
      .addTodoData(newTodoItem)
      .then((addTodo: IReadTodo) => {
        setTodoList([addTodo, ...todoList]);
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  };
  /**
   * deleteTodoListItem
   * @param {string} id
   */
  const deleteTodoListItem = (id: string): void => {
    todoData
      .deleteTodoData(id)
      .then((deleteListItemId) => {
        const newTodoList = todoList.filter(
          (item) => item.id !== deleteListItemId
        );
        setTodoList(newTodoList);
      })
      .catch((e) => {
        console.error(e);
        throw e;
      });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  } as IUseTodoResponse;
};
