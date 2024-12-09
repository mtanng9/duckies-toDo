import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import duckLogo from "./images/duckLogo.png";

function App() {
  const [todayTodos, setTodayTodos] = useState([
    { task: "Loading", dueDate: "Loading" },
  ]);
  const [upcomingTodos, setUpcomingTodos] = useState([
    { task: "Loading Upcoming", dueDate: "Loading Upcoming" },
  ]);
  const [pastDueTodos, setPastDueTodos] = useState([
    { task: "Loading Pastdue", dueDate: "Loading Pastdue" },
  ]);
  const [completedTodos, setCompletedTodos] = useState([
    { task: "Loading Completed", dueDate: "Loading Completed" },
  ]);

  useEffect(() => {
    fetchToday();
    fetchUpcoming();
    fetchPastDue();
    fetchCompleted();
  }, []);

  const fetchToday = async () => {
    await fetch("http://localhost:3000/todo/today")
      .then((response) => response.json()) // convert expected "response" to json format
      .then((response) => setTodayTodos(response))
      .catch((error) => console.error(error));
  };

  const fetchUpcoming = async () => {
    await fetch("http://localhost:3000/todo/upcoming")
      .then((response) => response.json()) // convert expected "response" to json format
      .then((response) => setUpcomingTodos(response))
      .catch((error) => console.error(error));
  };

  const fetchPastDue = async () => {
    await fetch("http://localhost:3000/todo/pastDue")
      .then((response) => response.json()) // convert expected "response" to json format
      .then((response) => setPastDueTodos(response))
      .catch((error) => console.error(error));
  };

  const fetchCompleted = async () => {
    await fetch("http://localhost:3000/todo/completed")
      .then((response) => response.json()) // convert expected "response" to json format
      .then((response) => setCompletedTodos(response))
      .catch((error) => console.error(error));
  };

  const handleUpdate = async (todo) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    };
    fetch(`http://localhost:3000/todo/${todo.id}`, requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  const handleDelete = (type, idx) => {
    var newList;
    switch (type) {
      case "today":
        newList = todayTodos.filter((_, i) => {
          return i !== idx;
        });
        setTodayTodos(newList);
        break;
      case "upcoming":
        newList = upcomingTodos.filter((_, i) => {
          return i !== idx;
        });
        setUpcomingTodos(newList);
        break;
      case "pastDue":
        newList = pastDueTodos.filter((_, i) => {
          return i !== idx;
        });
        setPastDueTodos(newList);
        break;
      case "complete":
        newList = completedTodos.filter((_, i) => {
          return i !== idx;
        });
        setCompletedTodos(newList);
    }
  };

  const deleteRequest = async (todo) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:3000/todo/${todo.id}`, requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  const onClickDelete = (todo, type, idx) => {
    handleDelete(type, idx);
    deleteRequest(todo);
  };

  const handleCheck = (todo, type, idx) => {
    todo.complete = true;
    var newCompletedList = [...completedTodos, todo];
    setCompletedTodos(newCompletedList);
    handleUpdate(todo); //saving the updated todo information
    handleDelete(type, idx);
  };

  return (
    <div className="">
      <div className="flex flex-row justify-center p-3">
        <h1 className="text-2xl font-semibold py-4">Duckies To-Do</h1>
        <img src={duckLogo} alt="logo of a duck" className="h-20 w-26" />
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="flex justify-center text-lg font-semibold">Today</h2>
        {todayTodos.map((todayTodo, idx) => {
          return (
            <Todo
              todo={todayTodo}
              type={"today"}
              idx={idx}
              handleCheck={handleCheck}
              handleDelete={onClickDelete}
            />
          );
        })}
        <p className="mx-auto border-2 px-3 mt-2 font-bold rounded">
          + Add Task
        </p>
      </div>

      <div>
        <h2 className="flex justify-center text-lg font-semibold mt-3">
          Upcoming
        </h2>
        {upcomingTodos.map((upcomingTodo, idx) => {
          return (
            <Todo
              todo={upcomingTodo}
              type={"upcoming"}
              idx={idx}
              handleCheck={handleCheck}
              handleDelete={onClickDelete}
            />
          );
        })}
      </div>

      <div>
        <h2 className="flex justify-center text-lg font-semibold mt-3">
          Past Due
        </h2>
        {pastDueTodos.map((pastDueTodo, idx) => {
          return (
            <Todo
              todo={pastDueTodo}
              type={"pastDue"}
              idx={idx}
              handleCheck={handleCheck}
              handleDelete={onClickDelete}
            />
          );
        })}
      </div>

      <div>
        <h2 className="flex justify-center text-lg font-semibold mt-3">
          Completed
        </h2>
        {completedTodos.map((completedTodo, idx) => {
          return (
            <Todo
              todo={completedTodo}
              type={"complete"}
              idx={idx}
              handleDelete={onClickDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
