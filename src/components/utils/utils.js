export const findManager = (users, userId) => users
  .find(user => user.id === userId);
