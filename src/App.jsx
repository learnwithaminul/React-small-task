import { BrowserRouter, Route, Routes } from "react-router-dom"
import MasterLayouts from "./layouts/MasterLayouts"
import CounterApp from "./pages/CounterApp"
import TodoApp from "./pages/TodoApp"
import FormApp from './pages/FormApp';
import "./assets/javascript/script"
import SearchApp from "./pages/SearchApp";
import DragInputApp from "./pages/DragInputApp";

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
      <Route path="search" element={<SearchApp/>}/>
      <Route path="draginput" element={<DragInputApp/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
