# React static list of TODOs

## Demo link

Add link here: `[DEMO LINK](https://aleksandra04.github.io/react_static-list-of-todos/)`


## Task

By using [todos.js](./src/api/todos.js) and [users.js](./src/api/users.js) as modules to your React application, create and display a list of all the TODO items. Alongside each item display information about the user it belongs to.

Create and use three components: `TodoList` (for the whole list), `TodoItem` (for a single TODO item), and `User` (for displaying information about a user). `TodoList` should display a list of `TodoItem`s; each `TodoItem` must display the basic info about an item as well as the `User` the item belongs to. You can choose yourself what exact information you want to present and how.

1. Create a function `getTodosWithUsers(todos, users)` returning an array of todos with a `user` property added to each todo. Place it in `App.js`
2. Create a component `<TodoList todos={preparedTodos} />` displaying the list of todos
3. Create a component `TodoItem` displaying an individual todo in the list
    ```jsx harmony
    {todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} />
    ))}
    ```
4. Create a component `<User user={todo.user} />` displaying a user name with some styling and use it in `<TodoItem />`

## Workflow

- Fork the repository with task
- Clone forked repository
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode

- Run `npm start` to start development server on `http://localhost:3000`
    When you run server the command line window will no longer be available for
    writing commands until you stop server (`ctrl + c`). All other commands you
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- run `npm run lint` to check code style
- When you finished add correct `homepage` to `package.json` and run `npm run deploy`
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure

- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.
