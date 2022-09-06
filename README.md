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

Вам даны массивы `todosFromServer` и `usersFromServer` с необходимыми данными.

Массив `todos` основан на `todosFromServer`, но к каждому todo привязан соответствующий пользователь. Кроме того, у вас есть интерфейсы `Todo` и `User`, уже реализованные в `./src/types/`.

Разделите данную разметку `App` на компоненты, следуя правилам:

- не меняйте имена классов CSS, они используются в тестах;
- `TodoList` берет `todos` и отображает один `TodoInfo` для каждого `todo` в массиве;
- `TodoInfo` берет задачу и отображает ее детали, включая `todo.user` с компонентом `UserInfo`, если у задачи есть пользователь;
- убедитесь, что у `TodoInfo` есть модификатор `TodoInfo--completed` для всех выполненных задач;
- `UserInfo` берет `пользователя` и отображает детали.

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_static-list-of-todos/) and add it to the PR description.
