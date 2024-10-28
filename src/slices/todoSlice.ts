import { WritableDraft } from "./../../node_modules/immer/src/types/types-external";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TodoState {
  id: string;
  name: string;
  createdAt: string;
  deletedAt?: string;
  editedAt?: string;
  isCompleted?: boolean;
}

const initialState: TodoState[] = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state: WritableDraft<TodoState>[],
      action: PayloadAction<TodoState>
    ) => {
      state.push(action.payload);
    },
  },
});
export const selectCount = (state: RootState) => state.todo;
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
