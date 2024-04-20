import { useNavigate } from 'react-router-dom'
import { useTodoListViewModel } from '../viewmodel/TodoItemListViewModel'
import { TodoItemView } from './TodoItemView'

export function TodoItemListView() {
  const navigate = useNavigate()
  const { getTodoItems } = useTodoListViewModel()

  return (
    <div className="flex flex-col gap-2">
      <h1>Todo's list</h1>
      <div className="flex flex-col gap-2">
        {getTodoItems().map((item) => (
          <TodoItemView key={item.id} item={item} />
        ))}
      </div>
      <button
        className="bg-blue-600 text-white py-2 px-5 rounded-md shadow-md max-w-24 self-center"
        onClick={() => navigate('/new')}
      >
        Add
      </button>
    </div>
  )
}
