# React static list of TODOs
- Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://sviatoslav-kishka.github.io/react_static-list-of-todos/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
By using [todos.js](./src/api/todos.js) and [users.js](./src/api/users.js) as
modules to your React application, create and display a list of all the TODO
items. Alongside each item display information about the user it belongs to.

1. Create a `preparedTodos` array of `todos` with a `user` property added to each `todo`. Place it in the `App.js`
1. Create a component `TodoList` accepting an array of `preparedTodos` and displaying them as a list
1. Create a component `Todo` accepting a `todo` object and displaying its `title`, `completed` status and `User`
1. Create a component `User` accepting a `user` object and displaying its name with some styling
