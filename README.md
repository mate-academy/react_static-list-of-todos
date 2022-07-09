# React static list of TODOs
You are given an array `todosFromServer` and `usersFromServer`. Also there is
a `todos` array where each `todo` has a corresponding user. In addition you
have `Todo` and `User` interfaces already implemented in `./src/types/`. Split
the `App` into components following the next rules:

- use the given markup (don't change class names, they are used in tests)
- `TodoList` takes `todos` and renders one `TodoInfo` per each `todo` in the array
- `TodoInfo` takes a `todo` and renders its details including `todo.user` with
  `UserInfo` component if a todo has a user
  - make sure `TodoInfo` has a `TodoInfo--completed` modifier for all completed todos
- `UserInfo` takes a `user` and renders the details

## Instructions
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)
- Open 1 more terminal and run tests with `npm test` to ensure your solutions is correct
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_static-list-of-todos/) and add it to PR description
