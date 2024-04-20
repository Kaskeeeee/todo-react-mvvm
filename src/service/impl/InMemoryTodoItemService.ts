import { TodoItem } from '../../model/TodoItem'
import { TodoItemService } from '../TodoItemService'

export class InMemoryTodoItemService implements TodoItemService {
  private serialId = 1

  constructor(private todos: TodoItem[] = []) {}

  async addTodoItem(item: TodoItem): Promise<TodoItem | undefined> {
    item.id = this.serialId
    this.serialId++
    this.todos.push(item)
    return item
  }

  async getTodoItems(): Promise<TodoItem[]> {
    const copyOfTodos = this.todos.map((todo) => ({ ...todo }))
    return copyOfTodos
  }

  async findById(id: number): Promise<TodoItem | undefined> {
    const item = this.todos.find((item) => item.id === id)
    if (item === undefined) {
      return undefined
    }

    return { ...item }
  }

  async updateTodoItem(item: TodoItem): Promise<TodoItem | undefined> {
    const todo = this.todos.find((todo) => todo.id === item.id)
    if (todo === undefined) {
      return undefined
    }

    todo.title = item.title
    todo.content = item.content
    todo.done = item.done
    todo.deadline = item.deadline
    return todo
  }
}
