import React, { useState, createContext } from 'react';
import { ITask } from '../types/task';

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

interface IGlobalContext {
  tasksList: ITask[];
  setTasksList: Dispatch<SetStateAction<ITask[]>>;
  selected?: ITask;
  setSelected?: Dispatch<SetStateAction<ITask>>;
  selectTask: (selectedTask: ITask) => void;
}

export const GlobalContext = createContext({} as IGlobalContext);

interface IProps {
  children: React.ReactNode;
}

export function GlobalProvider({ children }: IProps) {
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask)
  };

  return (
    <GlobalContext.Provider value={{
      tasksList,
      setTasksList,
      selectTask,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
