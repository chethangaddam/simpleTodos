// Write your code here

const TodoItem = props => {
  const {todosList, deteleTodo} = props
  const {title, id} = todosList

  const onDeleteTodo = () => {
    deteleTodo(id)
  }
  return (
    <li>
      <div>
        <p>{title}</p>
        <button type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
