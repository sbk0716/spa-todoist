import { ListItem, Text, Flex, Button, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IReadTodo } from "../interfaces/Todo";

interface ITodoItemProps {
  todo: IReadTodo;
  toggleTodoListItemStatus: Function;
  deleteTodoListItem: Function;
}

export function TodoItem({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}: ITodoItemProps) {
  const handleToggleTodoListItemStatus: React.MouseEventHandler<
    HTMLButtonElement
  > = () => toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem: React.MouseEventHandler<
    HTMLButtonElement
  > = () => deleteTodoListItem(todo.id);

  const label = todo.done ? "未完了リストへ" : "完了リストへ";
  const setColorScheme = todo.done ? "pink" : "blue";

  return (
    <ListItem
      borderWidth="1px"
      p="4"
      mt="4"
      bg="white"
      borderRadius="md"
      borderColor="gray.300"
    >
      <Text mb="6">{todo.content}</Text>
      <Flex alignItems="center" justifyContent="flex-end">
        <Button
          colorScheme={setColorScheme}
          variant="outline"
          size="sm"
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>
        <IconButton
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
          onClick={handleDeleteTodoListItem}
        />
      </Flex>
    </ListItem>
  );
}
