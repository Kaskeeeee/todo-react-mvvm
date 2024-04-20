import { useContext, useState } from 'react'
import { ServiceContext } from '../context/ServiceContext'
import { TodoItem } from '../model/TodoItem'

export interface TodoItemViewModel {
  isDone(): boolean
  setDone(done: boolean): void
  getTitle(): string
  setTitle(title: string): void
  getContent(): string
  setContent(content: string): void
  getDeadline(): Date | undefined
  setDeadline(deadline: Date | undefined): void
  isInEditMode(): boolean
  setInEditMode(value: boolean): void
  hasExpired(): boolean
  onCreationConfirm(): void
}

export function useTodoItemViewModel(item: TodoItem): TodoItemViewModel {
  const { todoItemService } = useContext(ServiceContext)
  const [todoItem, setTodoItem] = useState(item)
  const [inEditMode, setInEditMode] = useState(false)

  const isDone = () => todoItem.done
  const setDone = (done: boolean) => setTodoItem({ ...todoItem, done })

  const getTitle = () => todoItem.title
  const setTitle = (title: string) => setTodoItem({ ...todoItem, title })

  const getContent = () => todoItem.content
  const setContent = (content: string) => setTodoItem({ ...todoItem, content })

  const getDeadline = () => todoItem.deadline
  const setDeadline = (deadline: Date | undefined) => setTodoItem({ ...todoItem, deadline })

  const isInEditMode = () => inEditMode

  const hasExpired = () => todoItem.deadline !== undefined && new Date() > todoItem.deadline

  const onCreationConfirm = () => todoItemService.addTodoItem(todoItem)

  return {
    isDone,
    setDone,
    getTitle,
    setTitle,
    getContent,
    setContent,
    getDeadline,
    setDeadline,
    isInEditMode,
    setInEditMode,
    hasExpired,
    onCreationConfirm,
  }
}
