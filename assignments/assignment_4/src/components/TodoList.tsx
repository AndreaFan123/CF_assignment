import { ChangeEvent, useState } from "react";

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

export default TodoList;
