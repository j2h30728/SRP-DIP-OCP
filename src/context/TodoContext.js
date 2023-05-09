/**
 * AuthContext
 *
 * signin(eamil,password):Promise<undefined>
 * signup(email,password):Promise<undefined>
 * logout():void
 */

import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext(null);
export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    todoService.get().then(setTodos);
  }, [todoService, setTodos]);

  const create = async todo => {
    const newTodo = await todoService.create(todo);
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, create }}>
      {children}
    </TodoContext.Provider>
  );
}
