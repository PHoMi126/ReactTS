import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Logout';
import Login from './Login';
import { useSelector } from 'react-redux'; //Allows you to extract data from the Redux store state
//import { selectUser } from './redux/userSlice';

function App() {
  //const user = useSelector(selectUser);

  return (
    <div className='header'>
        <Login />
    </div>
  );

  // Redux example
  // return (
  //   <div className='header'>
  //       {user ? <Home/> : <Login /> }
  //   </div>
  // );
}

export default App;
