import Button from '../Button';
import style from './Chronometer.module.scss';
import Display from './Display';

function Chronometer() {
  return (
    <div className={style.chronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.displayWrapper}>
        <Display />
      </div>
      <Button title='Iniciar!' type='button'/>
    </div>
  )
}

export default Chronometer;
