import { BrowserRouter, Route, Routes } from "react-router-dom"
import MasterLayouts from "./layouts/MasterLayouts"
import CounterApp from "./pages/CounterApp"
import TodoApp from "./pages/TodoApp"
import FormApp from './pages/FormApp';
import "./assets/javascript/script"

function App() {
  const appname ="React Project";

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MasterLayouts title={appname}/>}>
      <Route index element={<CounterApp/>}/>
      <Route path="todo" element={<TodoApp/>}/>
      <Route path="form" element={<FormApp/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
