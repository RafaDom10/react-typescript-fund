import style from './Display.module.scss';

function Display() {
  return (
    <>
      <span className={style.displayNumber}>0</span>
      <span className={style.displayNumber}>0</span>
      <span className={style.displayDivider}>:</span>
      <span className={style.displayNumber}>0</span>
      <span className={style.displayNumber}>0</span>
    </>
  )
}

export default Display;
