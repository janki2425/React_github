import './App.css';
import React,{useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { fetchUsers } from './actions';

function App() {

    const dispatch=useDispatch();
    const {users, loading, error} = useSelector((state) => state);



    useEffect(()=>{
      dispatch(fetchUsers());
    },[dispatch]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error}</p>

  return (
    <div>
      <h1>Users : </h1>
      <ul>
        {
          users.slice(0,10).map((user)=>(
              <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
