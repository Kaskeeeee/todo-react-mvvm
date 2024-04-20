import { useContext, useEffect, useState } from 'react'
import { TodoItem } from '../model/TodoItem'
import { ServiceContext } from '../context/ServiceContext'

export interface TodoItemListViewModel {
  getTodoItems(): TodoItem[]
}

export function useTodoListViewModel(): TodoItemListViewModel {
  const { todoItemService } = useContext(ServiceContext)
  const [todoItems, setTodoItems] = useState<TodoItem[]>([])

  useEffect(() => {
    todoItemService.getTodoItems().then(setTodoItems)
  }, [])

  return {
    getTodoItems: () => todoItems,
  }
}
