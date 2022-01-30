import { Textarea, Button } from "@chakra-ui/react";

interface ITodoAddProps {
  placeholder: string;
  leftIcon: React.ReactElement;
  buttonText: string;
  inputEl: React.RefObject<HTMLTextAreaElement>;
  handleAddTodoListItem: React.MouseEventHandler<HTMLButtonElement>;
}

export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem,
}: ITodoAddProps) => (
  <>
    <Textarea
      placeholder={placeholder}
      bgColor="white"
      mt="8"
      borderColor="gray.400"
      ref={inputEl}
    />
    <Button
      onClick={handleAddTodoListItem}
      colorScheme="blue"
      leftIcon={leftIcon}
      mt="8"
    >
      {buttonText}
    </Button>
  </>
);
