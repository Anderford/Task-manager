import { Link } from 'react-router-dom';
import './App.css';
const Start = () => {

    
    return <div className='startPage'>
        <h1 className='startPageTitle'>Менеджер задач</h1>
        <Link className='startPageLink' to='/TaskManager'>НАЧАТЬ</Link>
    </div>
   
}

export default Start