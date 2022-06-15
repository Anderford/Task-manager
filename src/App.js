import { Routes, Route } from 'react-router-dom';
import TaskManager from '../src/TaskManager';
import Start from '../src/Start';
import './App.css'
const App = () => {
    return <div>
        <Routes>
            <Route path='/' element={<Start />} />
            <Route exect path='/TaskManager' element={<TaskManager />} />
        </Routes>
    </div>
}


export default App
