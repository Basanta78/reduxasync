const initialState = {
  fetching:false,
  fetched: false,
  todo: [],
  error: null
}

const reducer = (state=initialState, action) =>{
  switch(action.type) {
    case "FETCH_TODO_START":
    return {...state, fetching:true}
    break;
    case "FETCH_TODO_ERROR":
    return {...state, fetching:false, error: action.payload}
    break;
    case "RECIEVED_TODO":
    console.log(action.payload);
    return {...state, fetching:false,
    todo: action.payload,
  }
    break;
    default:
    return state;
  }
}
export default reducer;