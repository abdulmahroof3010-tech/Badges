import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/Counter/store'
import Counter from './Counter'
import TodoApp from './TodoApp'
import ToDo from './todo2/ToDo'
import TodoCon from './todo3/TodoCon'
import { Routes,Route } from 'react-router-dom'
import TodoPage from './todos/todoPage'
import DeletePage from './todos/DeletePage'
import Trafic from './TraficLight/Trafic'
import TraficLight from './TraficLight/TraficLight'
import LightChange from './task/lightChnage'
import LightSystem from './task/LightSystem'
import CheckBox from './Checkbox/CheckBox'
import Timer from './timer/Timer'
import TimerFun from './timer/TimerFun'
import StopWatch from './timer/StopWatch'


function App() {
  return (
    <>
    
      {/* <Provider store={store}>

      <Counter />
      </Provider> */}

      {/* <TodoApp /> */}

      {/* <ToDo /> */}
      {/* <TodoCon /> */}

      {/* <Routes>
        <Route path="/" element={<TodoPage />}/>
        <Route path="/delete" element={<DeletePage />} />
      </Routes> */}
      {/* <Trafic /> */}
      {/* <TraficLight /> */}
      <LightChange />
      {/* <LightSystem /> */}
      {/* <CheckBox /> */}
      {/* <Timer /> */}
      {/* <TimerFun /> */}
      {/* <StopWatch /> */}
  </>
  )
}

export default App
