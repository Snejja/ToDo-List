import { configureStore } from '@reduxjs/toolkit';

import generateId from './Middleware/GenerateId';

import reducer from './reducer';

const middleware = [generateId];

export default configureStore({
  reducer,
  middleware: middleware,
});
