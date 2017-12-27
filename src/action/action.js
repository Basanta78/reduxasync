export const startFetch =() => {
  return {
    type: "FETCH_TODO_START",
  }
}
export const receiveTodo =(payload) => {
  return {
    type:"RECIEVED_TODO",
     payload,
  }
}
export const errorTodo = (error) => {
  return {
    type: "FETCH_TODO_ERROR",
    error,
  }
}