import { useEffect, useState} from 'react'
import './App.css'
import Todo from './Todo'

function App() {
  const [todayTodos, setTodayTodos] = useState([{task:"Loading", dueDate:"Loading"}]);
  const [upcomingTodos, setUpcomingTodos] = useState([{task:"Loading Upcoming", dueDate:"Loading Upcoming"}]);
  const [pastDueTodos, setPastDueTodos] = useState([{task:"Loading Pastdue", dueDate:"Loading Pastdue"}]);
  const [completedTodos, setCompletedTodos] = useState([{task:"Loading Completed", dueDate:"Loading Completed"}]);
 

  useEffect(() => {
    fetchToday()
    fetchUpcoming()
    fetchPastDue()
    fetchCompleted()
  }, [])
 

  const fetchToday = async () => {
    await fetch("http://localhost:3000/todo/today")
      .then((response) => response.json()) // convert expected "response" to json format 
      .then((response) => setTodayTodos(response))
      .catch((error) => console.error(error));
  }

  const fetchUpcoming = async () => {
    await fetch("http://localhost:3000/todo/upcoming")
      .then((response) => response.json()) // convert expected "response" to json format 
      .then((response) => setUpcomingTodos(response))
      .catch((error) => console.error(error));
  }

  const fetchPastDue = async () => {
    await fetch("http://localhost:3000/todo/pastDue")
      .then((response) => response.json()) // convert expected "response" to json format 
      .then((response) => setPastDueTodos(response))
      .catch((error) => console.error(error));
  }

  const fetchCompleted = async() => {
    await fetch("http://localhost:3000/todo/completed")
    .then((response) => response.json()) // convert expected "response" to json format 
    .then((response) => setCompletedTodos(response))
    .catch((error) => console.error(error));
  }

  return (
      <div>
          <h1>Duckies To-Do</h1>

            <div>
              <h2>Today</h2>
              <br/>
              {todayTodos.map( (todayTodo) => {
                return <Todo todo={todayTodo}/>
              })}
           </div>


            <div>
              <h2>Upcoming</h2>
              <br/>
              {upcomingTodos.map( (upcomingTodo) => {
                return <Todo todo={upcomingTodo}/>
              })}
            </div>

            <div>
              <h2>Past Due</h2>
              <br/>
              {pastDueTodos.map( (pastDueTodo) => {
                return <Todo todo={pastDueTodo}/>
              })}
            </div>

            <div>
              <h2>Completed</h2>
              <br/>
              {completedTodos.map( (completedTodo) => {
                return <Todo todo={completedTodo}/>
              })}
            </div>

      </div>  
  )
}

export default App
