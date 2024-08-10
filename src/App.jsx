import { useEffect, useState } from 'react'

import './App.css'

import { TodoProvider } from './contexts';
import TodoForm from './components/ToDoForm';
import TodoItem from './components/ToDoItem';

function App() {
  
  const [ToDos, setTodos]= useState([]);

  const addToDo=(todo)=>{
        setTodos( (prev)=> [{id: Date.now() ,...todo}, ...prev]  )
  }
  const updateToDo=(id,todo)=>{
        setTodos( (prev)=> prev.map( (prevtodo)=> (prevtodo.id
        ===id?todo:prevtodo) ) )
  }
  const deleteToDo=(id)=>{
        setTodos( (prev)=> prev.filter((todo)=> todo.id!==id))
  }
  const toggleComplete=(id)=>{
        setTodos( (prev)=> prev.map( (prevtodo)=> prevtodo.id===
        id?{ ...prevtodo, Completed: !prevtodo.Completed}:
         prevtodo ) )
  }

  useEffect(()=>{
      const ToDos= JSON.parse( localStorage.getItem("ToDos") );
      if(ToDos && ToDos.length>0 ){
        setTodos(ToDos)
      }
  },[])

  useEffect(()=>{
      localStorage.setItem( "ToDos",JSON.stringify( ToDos ) )
  },[ToDos])

  return (
    <TodoProvider value={{addToDo, deleteToDo, updateToDo, toggleComplete, ToDos}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        { ToDos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo} />
                          </div>
                        )

                        ) }
                    </div>
                </div>
            </div>
    </TodoProvider>       

  )
}

export default App
