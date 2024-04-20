import { useNavigate } from 'react-router-dom'
import { useTodoItemViewModel } from '../viewmodel/TodoItemViewModel'

export function TodoItemCreateView() {
  const { getTitle, setTitle, getContent, setContent, onCreationConfirm } = useTodoItemViewModel({
    title: '',
    content: '',
    done: false,
  })

  const navigate = useNavigate()

  return (
    <div className="flex flex-col p-5 bg-slate-100 rounded-md shadow-md gap-2 items-center">
      <section className="flex flex-col items-start">
        <label>Title</label>
        <input type="text" value={getTitle()} onChange={(e) => setTitle(e.target.value)} />
      </section>

      <section className="flex flex-col items-start">
        <label>Description</label>
        <input type="text" value={getContent()} onChange={(e) => setContent(e.target.value)} />
      </section>
      <button
        className="p-2 bg-blue-600 rounded-md text-white max-w-24"
        onClick={() => {
          onCreationConfirm()
          navigate('/')
        }}
      >
        Confirm
      </button>
    </div>
  )
}
