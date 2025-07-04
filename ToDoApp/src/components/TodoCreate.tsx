function TodoCreate() {
  return (
    <div className="todo-create">
      <input
        placeholder="To Do Giriniz..."
        className="todo-input"
        type="text"
      />
      <button className="todo-create-button">Create</button>
    </div>
  );
}

export default TodoCreate;
