import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { TodoState } from "./slices/todoSlice";
import { getTasks, saveTasks } from "./localStorage";

const TODO_PESISTANCE_KEY = "TODO";
const TODO_SECOND_PESISTANCE_KEY = "SECOND-TODO";
const preloadedState = {
  todo: getTasks(TODO_PESISTANCE_KEY) as TodoState[], // Ensure type compatibility
  anotherTodo: getTasks(TODO_PESISTANCE_KEY) as TodoState[], // Ensure type compatibility
};
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    anotherTodo: todoReducer,
  },
  preloadedState,
});
store.subscribe(() => {
  saveTasks(TODO_PESISTANCE_KEY, store.getState().todo);
  saveTasks(TODO_SECOND_PESISTANCE_KEY, store.getState().todo);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
