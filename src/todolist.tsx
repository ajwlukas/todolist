//todolist.tsx
import { useState } from "react";

const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";

  const [todos, setTodos] = useState<string[]>([
    "잠자기",
    "공부하기",
    "미팅하기",
  ]);

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div className="board">
          <ul>
            <li>{todos[0]}</li>
            <li>{todos[1]}</li>
            <li>{todos[2]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
