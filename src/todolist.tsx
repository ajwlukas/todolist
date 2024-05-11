//todolist.tsx
import { useState } from "react";

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}

const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";

  const [todos, setTodos] = useState<Todo[]>([
    {id : 0, text  : "잠자기", isChecked : false},
    {id : 1, text  : "공부하기", isChecked : false},
    {id : 2, text  : "미팅하기", isChecked : false}
  ]);

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div className="board">
          <ul>
            <li>{todos[0].text}</li>
            <li>{todos[1].text}</li>
            <li>{todos[2].text}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
