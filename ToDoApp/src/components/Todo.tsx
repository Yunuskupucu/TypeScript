import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import type { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '2px solid lightgray',
        padding: '15px 20px',
        marginTop: '25px',
        borderRadius: '5px',
      }}
    >
      <div>{content}</div>
      <div>
        <IoMdRemoveCircleOutline
          onClick={handleRemoveTodo}
          style={{ color: 'red' }}
          className="icons"
        />
        <FaRegEdit style={{ color: 'blue' }} className="icons" />
      </div>
    </div>
  );
}

export default Todo;
