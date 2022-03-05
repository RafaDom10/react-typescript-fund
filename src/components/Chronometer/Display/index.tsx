import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import style from './Display.module.scss';

function Display() {
  const { time } = useContext(GlobalContext);

  const [ minuteFirstCharacter, minuteSecondCharacter] = String(Math.floor(time / 60))
    .padStart(2, '0');
  const [ secondsFirstCharacter, secondsSecondCharacter] = String(Math.floor(time % 60))
    .padStart(2, '0');

  return (
    <>
      <span className={style.displayNumber}>{minuteFirstCharacter}</span>
      <span className={style.displayNumber}>{minuteSecondCharacter}</span>
      <span className={style.displayDivider}>:</span>
      <span className={style.displayNumber}>{secondsFirstCharacter}</span>
      <span className={style.displayNumber}>{secondsSecondCharacter}</span>
    </>
  )
}

export default Display;
