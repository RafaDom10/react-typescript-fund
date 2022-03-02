import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from "../../types/task";

function Form() {
  const { setTasksList } = useContext(GlobalContext);

  const [task, setTask] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const getTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const getTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasksList((prevState: ITask[]) => [...prevState,
      {
        name: task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      }]
    );
    setTask('')
    setTime('')
  };

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione uma nova tarefa</label>
        <input type="text" name="task" id="task" placeholder="O que você quer estudar?" required
          value={task} onChange={getTask} />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:30" required
          value={time} onChange={getTime} />
      </div>
      <Button title="Adicionar" type="submit" />
    </form>
  )
}

export default Form;
