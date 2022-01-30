export interface IReadTodo {
  id: string;
  content: string;
  done: boolean;
};
export interface ICreateTodo {
  content: string;
  done?: boolean;
};
export interface IUpdateTodo {
  content?: string;
  done: boolean;
};