import { useRoutes } from 'react-router-dom'
import { TodoItemListView } from './TodoItemListView'
import { Fragment } from 'react/jsx-runtime'
import { TodoItemCreateView } from './TodoItemCreateView'

export function Routes() {
  const routes = useRoutes([
    { path: '/', element: <TodoItemListView /> },
    { path: '/new', element: <TodoItemCreateView /> },
  ])
  return <Fragment>{routes}</Fragment>
}
