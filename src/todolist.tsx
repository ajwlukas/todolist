//todolist.tsx
import { useState } from "react";
import { Button } from "react-bootstrap";
import TodoModal from "./TodoModal";

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

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo,setSelectedTodo] = useState<Todo|null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item, index) =>
        index === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length, text: newTodo, isChecked: false },
      ]);
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  const handleTodoClick = (todo : Todo)=> {
    setShowDetail(true);
    setSelectedTodo(todo);
  }

  const handleCloseDetail = () =>{
    setShowDetail(false);
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
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="primary" onClick={addTodo}>
            추가
          </Button>
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

                  <span onClick={()=>handleTodoClick(todo)}>
                    {todo.isChecked ? (
                      <del>{todo.text}</del>
                    ) : (
                      <span>{todo.text}</span>
                    )}
                  </span>

                  <button
                    className="del-button"
                    onClick={() => {
                      removeTodo(index);
                    }}
                  >
                    삭제
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}/>
    </div>
  );
};

export default TodoList;
