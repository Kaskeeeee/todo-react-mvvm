import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ServiceContext } from './context/ServiceContext'
import { InMemoryTodoItemService } from './service/impl/InMemoryTodoItemService'
import { Routes } from './view/Routes'

const todoItemService = new InMemoryTodoItemService()

function App() {
  return (
    <ServiceContext.Provider value={{ todoItemService }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ServiceContext.Provider>
  )
}

export default App
