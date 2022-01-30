import { useState, useEffect } from "react";

import { ulid } from "ulid";

import * as todoData from "../apis/todos";

interface Todo {
  id: number;
  content: string;
  done: boolean;
};

export const useTodo = () => {

  // const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useState<Array<Todo>>([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todo: Array<Todo>) => {
      const todoList: Array<Todo> = [...todo]
      setTodoList(todoList.reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id:number, done:boolean) => {
    const todoItem = todoList.find((item:Todo) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done };
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      setTodoList(newTodoList);
    });
  };
  const addTodoListItem = (todoContent:string) => {
    const newTodoItem = {
      content: todoContent,
      id: ulid(),
      done: false
    };
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };
  const deleteTodoListItem = (id:number) => {
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
    deleteTodoListItem
  };
};