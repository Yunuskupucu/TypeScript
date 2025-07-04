import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoSlice';
import type { TodoType } from '../types/types';

function TodoCreate() {
  const [newTodo, setNewTodo] = useState<string>('');

  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert('To Do giriniz !');
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo('');
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="To Do Giriniz..."
        className="todo-input"
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Create
      </button>
    </div>
  );
}

export default TodoCreate;
