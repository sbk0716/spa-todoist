import { List } from "@chakra-ui/react";

import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";
import { IReadTodo } from "../interfaces/Todo";
interface IFontSize {
  base: string;
  md: string;
}

interface ITodoListProps {
  title: string;
  as: string;
  fontSize: IFontSize;
  todoList: Array<IReadTodo>;
  toggleTodoListItemStatus: Function;
  deleteTodoListItem: Function;
};

export const TodoList = ({
  title,
  as,
  fontSize,
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem
}: ITodoListProps) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
          <List w="full">
            {todoList.map((todo:IReadTodo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </List>
        </>
      )}
    </>
  );
};
