import { createContext } from 'react'
import { TodoItemService } from '../service/TodoItemService'

type ServiceContextType = {
  todoItemService: TodoItemService
}

export const ServiceContext = createContext<ServiceContextType>({ todoItemService: undefined as any })
