import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line
export default (store) => (next) => (action) => {
  if (!action.meta?.generateId) return next(action);

  const { meta, ...rest } = action;
  next({
    ...rest,
    [meta.generateId]: uuidv4(),
  });
};
