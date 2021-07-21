import { createAction, createReducer } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/add', (task, date) => ({
  payload: { task, date },
  meta: { generateId: ['taskId'] },
}));

export const deleteTask = createAction('tasks/delete', (taskId) => ({
  payload: taskId,
}));

export const isChecked = createAction('task/checked', (taskId) => ({
  payload: taskId,
}));

const reducer = createReducer([], {
  [addTask]: (state, { payload, taskId }) => {
    state.push({
      id: taskId,
      text: payload.task,
      date: payload.date,
      isChecked: false,
    });
  },
  [deleteTask]: (state, { payload }) => {
    return state.filter((task) => task.id !== payload);
  },
  [isChecked]: (state, { payload }) => {
    const task = state.find((task) => task.id === payload);
    task.isChecked = !task.isChecked;
  },
});

export default reducer;

export const tasksSelector = (state) => state.tasks;
