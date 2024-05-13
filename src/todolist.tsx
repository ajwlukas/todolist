//todolist.tsx
import { useState } from "react";
import { Button } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = "오늘 할 일";

  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, text: "잠자기", isChecked: false },
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "미팅하기", isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = ()=>{
    if(newTodo.trim() !== ''){
      setTodos([...todos,{id : todos.length, text : newTodo, isChecked : false}]);
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할 일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e)=> setNewTodo(e.target.value)}
          />
          <Button variant="primary" onClick={addTodo}>추가</Button>
        </div>
        <div className="board">
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    onChange={() => {
                      handleCheckedChange(index);
                    }}
                  ></input>
                  {todo.isChecked ? (
                    <del>{todo.text}</del>
                  ) : (
                    <span>{todo.text}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
