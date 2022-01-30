import { useState, useEffect } from "react";

import { ulid } from "ulid";

import * as todoData from "../apis/todos";
import { IReadTodo } from "../interfaces/Todo";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Array<IReadTodo>>([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todo: Array<IReadTodo>) => {
      const todoList: Array<IReadTodo> = [...todo];
      setTodoList(todoList.reverse());
    });
  }, []);

  /**
   * toggleTodoListItemStatus
   * @param id {string}
   * @param done {boolean}
   */
  const toggleTodoListItemStatus = (id: string, done: boolean): void => {
    const todoItem = todoList.find((item: IReadTodo) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done };
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      setTodoList(newTodoList);
    });
  };
  /**
   * addTodoListItem
   * @param todoContent {string}
   */
  const addTodoListItem = (todoContent: string): void => {
    const newTodoItem: IReadTodo = {
      content: todoContent,
      id: ulid(),
      done: false,
    };
    todoData.addTodoData(newTodoItem).then((addTodo: IReadTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };
  /**
   * deleteTodoListItem
   * @param id {string}
   */
  const deleteTodoListItem = (id: string): void => {
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        (item) => item.id !== deleteListItemId
      );
      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};
