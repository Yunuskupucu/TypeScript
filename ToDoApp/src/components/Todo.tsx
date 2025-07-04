import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';

function Todo() {
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
      <div>Todo-1</div>
      <div>
        <IoMdRemoveCircleOutline style={{ color: 'red' }} className="icons" />
        <FaRegEdit style={{ color: 'blue' }} className="icons" />
      </div>
    </div>
  );
}

export default Todo;
