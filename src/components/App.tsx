import { useRef } from "react";
import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTodo } from "../hooks/useTodo";
import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { IReadTodo } from "../interfaces/Todo";

const App = () => {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  const inputEl: React.RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);

  /**
   * handleAddTodoListItem
   */
  const handleAddTodoListItem = (): void => {
    if (inputEl.current?.value === "") return;
    if (inputEl.current?.value) {
      addTodoListItem(inputEl.current?.value);
      inputEl.current.value = "";
    }
  };

  const inCompletedList = todoList.filter((todo: IReadTodo) => !todo.done);

  const completedList = todoList.filter((todo: IReadTodo) => todo.done);

  return (
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
      <TodoTitle
        title="TODO進捗管理"
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        mt="1"
      />
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="TODOを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
      />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
      />
    </Container>
  );
};

export default App;
