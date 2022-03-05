import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { ITask } from '../../../types/task';
import style from './Task.module.scss';

function Task({ name, time, completed, selected, id }: ITask) {

  const { selectTask } = useContext(GlobalContext);

  return (
    <li className={`${style.task} ${selected ? style.selectedTask : ''}
      ${completed ? style.completedTask : ''}`}
      onClick={() => !completed && selectTask({ name, time, completed, selected, id })}
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {completed && <span className={style.completed} aria-label='Tarefa Completada.'></span>}
    </li>
  )
}

export default Task;
