# React static list of TODOs
You are given `todosFromServer` and `usersFromServer` arrays with required data.
`todos` array is based on `todosFromServer` but each `todo` has a corresponding
user attached. In addition you have `Todo` and `User` interfaces already
implemented in `./src/types/`. Split the given `App` markup into components
following the next rules:

- don't change class names, they are used in tests
- `TodoList` takes `todos` and renders one `TodoInfo` per a `todo` in the array
- `TodoInfo` takes a `todo` and renders its details including `todo.user` with
  `UserInfo` component if a todo has a user
  - make sure `TodoInfo` has a `TodoInfo--completed` modifier for all completed todos
- `UserInfo` takes a `user` and renders the details

## Instructions
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)
- Open 1 more terminal and run tests with `npm test` to ensure your solutions is correct
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://artemfurdela.github.io/react_static-list-of-todos/) and add it to PR description
