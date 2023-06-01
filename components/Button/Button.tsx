import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

// <Button appearance="primary">Press me</Button>

// appearance - тип кнопки
// children - содержимое тега компонента <Button>children</Button>
// className - классы прописаные в теге
// ...props - остальные свойства которые наследуются от родителей ButtonProps

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
    return (<button
        className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost',
        })}

        // Остальные свойства для кнопки
        {...props}
    >
        {children}
    </button>);
};