import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Button from '../Button';
import style from './Chronometer.module.scss';
import Display from './Display';

function Chronometer() {
  const { timeRegression, time } = useContext(GlobalContext);

  return (
    <div className={style.chronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.displayWrapper}>
        <Display />
      </div>
      <Button title='Iniciar!' type='button' onClick={() => timeRegression(time)} />
    </div>
  )
}

export default Chronometer;
