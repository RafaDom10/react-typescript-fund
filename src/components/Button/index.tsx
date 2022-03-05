import style from './Button.module.scss';

interface IButtonProps {
  title: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}

function Button({ title, type, onClick }: IButtonProps) {
  return (
    <button className={style.btn} type={type} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button;
