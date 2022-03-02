import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { ITask } from '../../../types/task';
import style from './Task.module.scss';

function Task({ name, time, completed, selected, id }: ITask) {

  const { selectTask } = useContext(GlobalContext);

  console.log({ name, time, completed, selected, id })
  return (
    <li className={style.task} onClick={() => selectTask({
      name,
      time,
      completed,
      selected,
      id
    })}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  )
}

export default Task;
