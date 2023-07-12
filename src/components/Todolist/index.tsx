import { useState } from "react";
import TaskInput from "../TaskInput";
import TaskListFail from "../TaskListFail";
import TaskListTrue from "../TaskListTrue";
import { Todo } from "../../@types/todo.type";
const Index = () => {
  const [notDoneTodos, setNotDoneTodos] = useState<Todo[]>([]);
  const [doneTodos, setDoneTodos] = useState<Todo[]>([]);
  const [stateTask, setStateTask] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: stateTask,
      id: new Date().toISOString(),
    };

    if (stateTask) {
      setDoneTodos((prev) => [...prev, todo]);
    } else {
      setNotDoneTodos((prev) => [...prev, todo]);
    }
  };
  const handleChangeNameNotDoneTodos = (name: string) => {
    if (id) {
      const updatedNotDoneTodos = notDoneTodos.map((todo) =>
        todo.id === id ? { ...todo, name: name } : todo
      );
      setNotDoneTodos(updatedNotDoneTodos);
      setId("");
    }
  };
  const handleChangeNameDoneTodos = (name: string) => {
    if (id) {
      const updatedDoneTodos = doneTodos.map((todo) =>
        todo.id === id ? { ...todo, name: name } : todo
      );
      setDoneTodos(updatedDoneTodos);
      setId("");
    }
  };
  const handleDeleteNotDoneTodos = (id: string) => {
    const updatedNotDoneTodos = notDoneTodos.filter((todo) => todo.id !== id);
    setNotDoneTodos(updatedNotDoneTodos);
  };
  const handleDeleteDoneTodos = (id: string) => {
    const updatedDoneTodos = doneTodos.filter((todo) => todo.id !== id);
    setDoneTodos(updatedDoneTodos);
  };
  return (
    <div>
      <div>
        <TaskInput
          name={name}
          setName={setName}
          addTodo={addTodo}
          setId={setId}
          id={id}
          handleChangeNameNotDoneTodos={handleChangeNameNotDoneTodos}
          handleChangeNameDoneTodos={handleChangeNameDoneTodos}
        />
      </div>
      <h2 style={{ margin: "10px 0px" }}>Chưa hoàn thành</h2>
      <div>
        <TaskListFail
          notDoneTodos={notDoneTodos}
          doneTodos={doneTodos}
          setNotDoneTodos={setNotDoneTodos}
          setDoneTodos={setDoneTodos}
          setStateTask={setStateTask}
          stateTask={stateTask}
          setName={setName}
          setId={setId}
          handleDeleteNotDoneTodos={handleDeleteNotDoneTodos}
        />
      </div>
      <h2 style={{ margin: "10px 0px" }}>Đã hoàn thành</h2>
      <div>
        <TaskListTrue
          doneTaskList
          doneTodos={doneTodos}
          setDoneTodos={setDoneTodos}
          stateTask={stateTask}
          setStateTask={setStateTask}
          notDoneTodos={notDoneTodos}
          setNotDoneTodos={setNotDoneTodos}
          setId={setId}
          handleDeleteDoneTodos={handleDeleteDoneTodos}
          setName={setName}
        />
      </div>
    </div>
  );
};

export default Index;
