import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import type { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';
import { useState } from 'react';

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between ',
        border: '2px solid lightgray',
        padding: '15px 20px',
        marginTop: '25px',
        borderRadius: '5px',
      }}
    >
      {editable ? (
        <input
          type="text"
          style={{
            width: '350px',
            border: 'none',
            borderBottom: '1px solid lightgray',
            outline: 'none',
          }}
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <IoMdRemoveCircleOutline
          onClick={handleRemoveTodo}
          style={{ color: 'red' }}
          className="icons"
        />
        {editable ? (
          <FaCheck
            style={{ color: 'green' }}
            onClick={handleUpdateTodo}
            className="icons"
          />
        ) : (
          <FaRegEdit
            onClick={() => setEditable(true)}
            style={{ color: 'blue' }}
            className="icons"
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
