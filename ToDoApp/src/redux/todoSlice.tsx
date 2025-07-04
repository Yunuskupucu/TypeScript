import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TodoInitialState, TodoType } from '../types/types';

const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { createTodo } = todoSlice.actions;

export default todoSlice.reducer;
