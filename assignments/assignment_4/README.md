# Assignment 4

## Original Code

```tsx
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "學習 React", completed: false, studyPoint: 3 },
    { id: 2, text: "建立專案", completed: false, studyPoint: 1 },
  ]);
  const { id, text, studyPoint } = todos;
  const [basePoints, setbasePoints] = useState(3);
  const [sumPoints, setSumPoints] = useState(0);

  const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    todo.completed = !todo.completed;
    setTodos(todos);
  };
  const handleStudyPointsChange = (e) => {
    basePoints(e.target.value);
    setSumPoints(parseInt(value1) + parseInt(e.target.value));
  };
  return (
    <div>
      <p>課程名稱: {text}</p>
      <label>學習點數: </label>
      <input
        type="number"
        value={studyPoint}
        onChange={handleStudyPointsChange}
      />
      <p>總累積點數: {sumPoints}</p>
      <button onClick={toggleTodo(id)}>篩選課程</button>
    </div>
  );
};
```

### Problems

1. Using wrong way to destructure an array

```tsx
const { id, text, studyPoint } = todos;
```

2. `toggleTodo(id)` function

- The value of `completed` should not be mutated directly; instead, it should be treated as immutable.
- `setTodos(todos)` was not working as the reference was the same, it won't trigger re-render.
- The current `onClick={toggleTodo(id)}` will execute immediately instead of waiting for a click.

```tsx
const toggleTodo = (id) => {
  const todo = todos.find((t) => t.id === id);
  todo.completed = !todo.completed;
  setTodos(todos);
};
```

3. `handleStudyPointsChange` function

- `basePoints(e.target.value);` should be `setBasePoint(e.target.value)`
- `setSumPoints(value1)`, `value1` is not existed.

4. UI

- Todos is an array; we can use `map` to render all todo list.
- button needs to be part of it, as it's used to track the value.
- "篩選課程" is vague; we can change description for more accuracy.

## Revamp

```tsx
const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "學習 React", completed: false, studyPoint: 3 },
    { id: 2, text: "建立專案", completed: false, studyPoint: 1 },
  ]);

  const [sumPoints, setSumPoints] = useState(0);

  const toggleTodo = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo === undefined) return;

    if (!todo.completed) {
      setSumPoints((prev) => prev + todo.studyPoint);
    } else {
      setSumPoints((prev) => prev - todo.studyPoint);
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleStudyPointsChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const value = parseInt(e.target.value);
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              studyPoint: value,
            }
          : todo
      )
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label htmlFor={todo.text}>課程名稱：{todo.text}</label>
          <input
            name={todo.text}
            type="number"
            value={todo.studyPoint}
            onChange={(e) => handleStudyPointsChange(e, todo.id)}
          />
          <button onClick={() => toggleTodo(todo.id)}>
            {todo.completed ? "完成課程" : "未完成課程"}
          </button>
        </div>
      ))}
      <p>總累積點數: {sumPoints}</p>
    </div>
  );
};
```

### Improvement

1. Remove `const [basePoints, setBasePoints] = useState(0)`, as we can track from todos.
2. Deal with `sumPoints` inside of `toggleTodo()` function, as when user toggles a course, it should reflect `sumPoints` immediately.
3. Using `prev => prev + studyPoint` to update `sumPoints`, as it guarantee using the latest state.
4. Mapping todos inside of `setTodos()`, as it will return a new array without affecting original one.
5. Use `map()` to render all list, and move button inside of it.
6. Add `htmlFor` inside of `label` and `name` inside of `input` to improve a11y.
7. Amend button description for more context accuracy.
8. Add parameters for `handleStudyPointsChange` function, as it's easy to track.
