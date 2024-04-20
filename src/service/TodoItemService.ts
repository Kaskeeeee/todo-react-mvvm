import { TodoItem } from '../model/TodoItem'

export interface TodoItemService {
  addTodoItem(item: TodoItem): Promise<TodoItem | undefined>
  getTodoItems(): Promise<TodoItem[]>
  findById(id: number): Promise<TodoItem | undefined>
  updateTodoItem(item: TodoItem): Promise<TodoItem | undefined>
}
