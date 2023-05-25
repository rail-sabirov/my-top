/**
 * Компонент для получения h1-h6
 * 
 * <Htag tag='h1'>Text</Htag>
 * 
 * Наши свойства tag и содержимое тега 'Text' - children, определяем это в файле Htag.props.tsx
 * 
 * @returns JSX.Element
 */

import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    // Зависимость от значение tag выводим разные заголовки
    switch (tag) {
        case 'h1':
            return <h1 className={styles.h1}>{children}</h1>;
        case 'h2':
            return <h2 className={styles.h2}>{children}</h2>;
        case 'h3':
            return <h3 className={styles.h3}>{children}</h3>;    
        default:
            return <></>;
    }
};