import axios from 'axios';

export const fetchUsersRequest=()=>({type:'FETCH_USERS_REQUEST'});
export const fetchUsersSuccess=(users)=>({type:'FETCH_USERS_SUCCESS',payload:users});
export const fetchUsersFailure=(error)=>({type:'FETCH_USERS_FAILURE',payload:error});

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                dispatch(fetchUsersSuccess(response.data));
            })
            .catch((error)=>{
                dispatch(fetchUsersFailure(error.message));
            })
    }
}