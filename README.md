# React Static List of TODOs

> [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

You are given `todosFromServer` and `usersFromServer` arrays with the required data.

A `todos` array is based on the `todosFromServer`, but each `todo` has a corresponding user attached. In addition, you have the `Todo` and `User` interfaces already implemented in `./src/types/`. 

Split the given `App` markup into component following the rules:

- don't change CSS class names, they are used in tests;
- `TodoList` takes the `todos` and renders one `TodoInfo` per `todo` in the array;
- `TodoInfo` takes a `todo` and renders its details, including a `todo.user` with `UserInfo` component if the todo has a user;
- make sure that the `TodoInfo` has a `TodoInfo--completed` modifier for all completed todos;
- `UserInfo` takes a `user` and renders the details.

Вам надано масиви `todosFromServer` і `usersFromServer` з потрібними даними.

Масив `todos` базується на `todosFromServer`, але до кожного `todo` приєднано відповідного користувача. Крім того, інтерфейси `Todo` і `User` вже реалізовані в `./src/types/`.

Розділіть задану розмітку `App` на компоненти за правилами:

- не змінювати імена класів CSS, вони використовуються в тестах;
- `TodoList` бере `todos` і відображає один `TodoInfo` на `todo` в масиві;
- `TodoInfo` приймає `todo` і відображає його деталі, включаючи `todo.user` з компонентом `UserInfo`, якщо у todo є користувач;
- переконайтеся, що `TodoInfo` має модифікатор `TodoInfo--completed` для всіх завершених завдань;
- `UserInfo` приймає `користувача` і відображає деталі.

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://yevhenii-stanchenko.github.io/react_static-list-of-todos/) and add it to the PR description.
