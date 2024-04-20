import { TodoItem } from '../model/TodoItem'
import { useTodoItemViewModel } from '../viewmodel/TodoItemViewModel'

type Props = {
  item: TodoItem
}

export function TodoItemView(props: Props) {
  const { getTitle, getContent, isDone, setDone } = useTodoItemViewModel(props.item)

  return (
    <div className="flex flex-row justify-between items-center bg-slate-100 rounded-md shadow-md p-2">
      <div className="flex flex-col items-start">
        <h1>{getTitle()}</h1>
        <p>{getContent()}</p>
      </div>

      <button
        className={`font-bold ${isDone() ? 'text-green-500' : 'text-red-500'}`}
        onClick={() => setDone(!isDone())}
      >
        {isDone() ? 'DONE' : 'TO-DO'}
      </button>
    </div>
  )
}
