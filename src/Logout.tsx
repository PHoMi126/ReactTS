import './App.css';
import { useDispatch } from 'react-redux';
import { home } from './redux/userSlice';

function Home() {

    const dispatch = useDispatch();

    const handleSubmit = (event: any) => {
        //Prevent page reload
        event.preventDefault();

        dispatch(home()); // Cannot reach Home without re-login
    };

    return (
        <div className='home'>
            <h1>Home</h1>
            <button type="submit" onClick={handleSubmit}>Log out</button>
        </div>
    );
}
  
export default Home;