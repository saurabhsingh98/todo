import {createContext , useContext} from 'react';


export const TodoContext= createContext({
    ToDos: [
        {
            id:1,
            Todo:"msg",
            Completed:false
        }

    ]
    ,
    addToDo: (Todo)=>{},
    updateToDo:(id,Todo)=>{},
    deleteToDo :(id)=>{},
    toggleComplete: (id)=> {},   
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export  const TodoProvider= TodoContext.Provider ;