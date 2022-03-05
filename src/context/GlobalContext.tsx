import React, { useState, createContext, useEffect } from 'react';
import { timeToSeconds } from '../common/utils/time';
import { ITask } from '../types/task';

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

interface IGlobalContext {
  tasksList: ITask[];
  setTasksList: Dispatch<SetStateAction<ITask[]>>;
  selected: ITask | undefined;
  setSelected: Dispatch<SetStateAction<ITask>>;
  time: number;
  selectTask: (selectedTask: ITask) => void;
  timeRegression: (counter: number) => void;
  taskCompleted: () => void;
}

interface IProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({} as IGlobalContext);

export function GlobalProvider({ children }: IProps) {
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected]);

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasksList(prevState => prevState.map(task => ({
      ...task,
      selected: task.id === selectedTask.id && true
    })))
  }

  function timeRegression(counter: number) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return timeRegression(counter - 1);
      }
      taskCompleted();
    }, 1000)
  }

  function taskCompleted() {
    if (selected) {
      setSelected(undefined);
      setTasksList(prevState => prevState.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }))
    }
  }

  return (
    <GlobalContext.Provider value={{
      tasksList,
      setTasksList,
      selected,
      selectTask,
      time,
      timeRegression,
      taskCompleted
    } as IGlobalContext}>
      {children}
    </GlobalContext.Provider>
  );
}
