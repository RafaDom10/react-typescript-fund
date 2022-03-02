import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { ITask } from '../../types/task';

import style from './List.module.scss';
import Task from './Task';

function List() {
  const { tasksList } = useContext(GlobalContext);

  return (
    <aside className={style.tasksList}>
      <h2>Estudos do dia</h2>
      <ul>
        {
          tasksList.map((task: ITask) => (
            <Task key={task.id} {...task} />
          ))
        }
      </ul>
    </aside>
  )
}

export default List;
