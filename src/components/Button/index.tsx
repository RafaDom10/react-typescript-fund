import style from './Button.module.scss';

interface IButtonProps {
  title: string;
  type?: 'submit' | 'button' | 'reset';
}

function Button({ title, type }: IButtonProps) {
  return (
    <button className={style.btn} type={type}>
      {title}
    </button>
  )
}

export default Button;
